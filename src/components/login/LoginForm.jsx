import React, {useState} from 'react'
import { useAuth } from '../../Hooks/useAuth';
import { Navigate, useNavigate } from 'react-router';


function LoginForm() {
    const{ login, setEmail, setPassword,email,password }= useAuth();
    const navigate = useNavigate();
   
    function onSubmit(event ){
        event.preventDefault();
        console.log("email",email);
        console.log("password", password);
        console.log("fullName,fullname")
        if (email && password){
            login();
            navigate("/");
            
        }
        setEmail("");
        setPassword("");
 
    }

    function setEmailFn(event){
        setEmail(event.target.value);

    }
    function setPasswordFn(event){
        setPassword(event.target.value);
    }
    function setFullName(event){
        setFullName(event.target.value);
    }


  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 space-y-6">
      <h2 className="text-3xl font-black text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">Login</h2>
      
      <div className="space-y-2">
        <label className="block text-lg font-semibold text-gray-800">Full Name</label>
        <input
          type='text'
          placeholder='Enter your full name'
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
        />
      </div>
      
      <div className="space-y-2">
        <label className="block text-lg font-semibold text-gray-800">Email</label>
        <input
          type='email'
          placeholder='enter your email'
          onChange={setEmailFn}
          value={email}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
        />
      </div>
      
      <div className="space-y-2">
        <label className="block text-lg font-semibold text-gray-800">Password</label>
        <input
          type='password'
          placeholder='enter your password'
          onChange={setPasswordFn}
          value={password}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
        />
      </div>
      
      <button
        type='submit'
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg mt-8"
      >
        Submit
      </button>
    </form> 
  );
  
}


export default LoginForm