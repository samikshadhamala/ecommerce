import React from 'react'
 import { Route, Routes } from 'react-router-dom'
 import Mainlayout from './layouts/Mainlayout.jsx'
import Homepages from './pages/Homepages.jsx'
import NotFound from './pages/NotFound.jsx'
import CartProvider from './context/CartContex.jsx'
import Cartpages from './pages/Cartpages.jsx'
import Productpage from './pages/Productpage.jsx'
import SingleProductPage from './pages/SingleProductpage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import { AuthProvider } from './context/AuthContex.jsx'
import ProtectedRouter from './components/common/ProtectedRoutes.jsx'


 

function App() {
  return (
    <AuthProvider>
    <CartProvider>
    <Routes>
      <Route
      path='/'
      element={<Mainlayout />}
      >
        <Route
        index
        element ={<Homepages />}
        />
        <Route path='/products' element ={<Productpage />} />
        <Route 
        path='products/:id'
      element= {
        <productRoutes>
         <SingleProductPage />
        </productRoutes>}
         />
      
      
        
      
        

        <Route 
        path= '/cart'
        element ={<Cartpages />}
        />
        <Route
        path='/login'
        element={<LoginPage />}
        />
      

    </Route>
    <Route
    path='*'
    element={<NotFound/>}/>
    </Routes>
  </CartProvider>
  </AuthProvider>
  
  )
}

export default App 