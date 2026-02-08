import React, { useEffect } from 'react'
import { useAuth } from '../../Hooks/useAuth'
import { useNavigate } from 'react-router';

function ProtectedRoutes( children) {
    const {isLoggedIn}= useAuth();

    const navigate =useNavigate();

    console.log("isLoggedin",isLoggedIn);

    useEffect(()=> {

    if(!isLoggedIn){
      navigate("/login");
    }
  }, [navigate]);
    

        
    
  return children;
}
    
  
export default ProtectedRoutes;