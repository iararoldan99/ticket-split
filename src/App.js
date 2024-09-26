import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AuthProvider from './app/context/AuthContext'; 
import Landing from './app/pages/Landing/Landing';
import Login from './app/pages/Login/Login';
import ForgotPassword from './app/pages/ForgotPassword/ForgotPassword';
import ResetPassword from './app/pages/ResetPassword/ResetPassword';
import Registro from './app/pages/Registro/Registro';
import Dashboard from './app/pages/Dashboard/Dashboard'; 
import ProjectCreate from './app/pages/ProjectCreate/ProjectCreate'; 
import ViewProjects from './app/pages/ViewProjects/ViewProjects'; 
import ProjectDetails from './app/pages/ProjectDetails/ProjectDetails'; 
import MyAccount from './app/pages/MyAccount/MyAccount'; 

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/projectCreate" element={<ProjectCreate />} />
        <Route path="/viewProjects" element={<ViewProjects />} /> 
        <Route path="/projects/:projectName" element={<ProjectDetails />} /> 
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <AuthProvider>  
      <Router>
        <AnimatedRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
