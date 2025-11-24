import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register';
import Forget from './pages/auth/Forget';
import OTPForm from './pages/auth/Otp';
import ResetPassword from './pages/auth/ResetPassword';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <ToastContainer 
        position="top-right"
        autoClose={3000}
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/otp' element={<OTPForm />} />
        <Route path='/forget_password' element={<Forget />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </>
  )
}

export default App
