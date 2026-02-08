import React from 'react'
import LoginForm from '../components/login/LoginForm'

function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage