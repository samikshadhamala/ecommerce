import { useContext } from "react";
import { AuthContext } from "../context/AuthContex";




export function useAuth(){
    return useContext(AuthContext);
}