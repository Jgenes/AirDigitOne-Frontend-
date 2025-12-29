import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import './pages/employer/dashboard/assets/css/material-dashboard.css';
import './pages/employer/dashboard/assets/css/material-dashboard.min.css';
import { AuthProvider } from './context/AuthContext'; // import AuthProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
