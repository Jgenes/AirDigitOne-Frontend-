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
import SaveInterest from "./pages/auth/SaveInterest";
import Dashboard from './pages/Dashboard';
import Vacancy from './pages/vacancy/Vacancy';
import VacancyPerCategory from './pages/vacancy/VacancyPerCategory';
import EmployerRegister from './pages/employer/register';

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
        <Route path='/save-interest' element={<SaveInterest />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/jobs' element={<Vacancy />} />
        <Route path='/jobs/category/:id' element={<VacancyPerCategory />} />
        <Route path='/employer/register' element={<EmployerRegister />} />
      </Routes>
    </>
  )
}

export default App
