import { useContext } from "react";
import { CartContext } from "../context/CartContex";

export const useCart = () => useContext(CartContext);