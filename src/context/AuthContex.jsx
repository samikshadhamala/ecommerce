import React,{ createContext, useState } from "react";

export const AuthContext = createContext();
export function AuthProvider({children}){
    const [isLoggenIn, setIsLoggedIn] = useState(false);
     const [email,setEmail]= useState("");
        const [password,setPassword]=useState("");
        const [fullName, setFullName] = useState("");
    
    function login() {
        setIsLoggedIn(true);
    }
    function logout(){
        setIsLoggedIn(false);
    }
    console.log("isLoggedIn:", isLoggenIn);
    return (
        <AuthContext.Provider value={{isLoggenIn,login,logout, email, password, setPassword , fullName,setFullName}}>
            {children}
        </AuthContext.Provider>
    )
}