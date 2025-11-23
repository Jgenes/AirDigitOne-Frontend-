import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register';
import OTPForm from './pages/auth/Otp';
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
      </Routes>
    </>
  )
}

export default App
