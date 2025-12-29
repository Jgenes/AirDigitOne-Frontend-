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
import EmployerOnboarding from './pages/employer/onBoarding';
import WaitVerifications from './pages/employer/waitVerifications';
import HomeDashboard from './pages/employer/dashboard/pages/dashboard';
import AdminDashboard from './pages/admin/dashboard/pages/AdminDashboard';
import EmployerVerification from './pages/admin/dashboard/pages/Verifications';
import EmployerJobs from './pages/employer/dashboard/pages/EmployerJobs';
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
        <Route path='/employer/onboarding' element={<EmployerOnboarding />} />
        <Route path='/employer/wait-verification' element={<WaitVerifications />} />
        <Route path='/employer/dashboard' element={<HomeDashboard />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/employer-verifications' element={<EmployerVerification />} />
        <Route path='/admin/employer-jobs' element={<EmployerJobs />} />
      </Routes>
    </>
  )
}

export default App
