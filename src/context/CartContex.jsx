import React, { createContext, useContext, useEffect, useState } from "react";
export const CartContext = createContext();

function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  //step 1: Initoalize cart items from localStorage on component creation
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  function addToCart(product) {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) return;
    //step 2a Create updated cart array with new product 
    const updatedCart = [...cartItems, product];
    //step 2b: update react satate
    setCartItems(updatedCart);
    //step 2c: save updated cart to localStorage with key 'cartItems'
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  }

  function isInCart(productId) {
    return cartItems.some((item) => item.id === productId);
  }

  function removeFromCart(productId) {
    //step1
    const currentItems = cartItems;
    //step 2 filter
    const updatedItems = currentItems.filter((item) => {
      return item.id !== productId;
    });
    // step 3 set the updated items
    setCartItems(updatedItems);
    //step 3d: save updated cart to localstorage (removes the item )
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  }

  const cartCount = cartItems.length;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        cartCount,
        addToCart,
        isInCart,
        removeFromCart,
        loading,
        cartItems,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

