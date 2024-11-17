import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { AnimatePresence } from 'framer-motion';
import { store } from './app/redux/store'; 
import AuthProvider from './app/context/AuthContext'; 
import Landing from './app/pages/Landing/Landing';
import Login from './app/pages/Login/Login';
import Registro from './app/pages/Registro/Registro';
import Dashboard from './app/pages/Dashboard/Dashboard'; 
import SplitBill from './app/pages/SplitBill/SplitBill';
import PrivateRoute from './app/pages/PrivateRoute';
import ForgotPassword from './app/pages/ForgotPassword/ForgotPassword';
import ResetPassword from './app/pages/ResetPassword/ResetPassword';  
import ViewProjects from './app/pages/ViewProjects/ViewProjects';
import ProjectCreate from './app/pages/ProjectCreate/ProjectCreate';
import ProjectDetails from './app/pages/ProjectDetails/ProjectDetails';
import MyAccount from './app/pages/MyAccount/MyAccount';  
import Notifications from './app/pages/Notifications/Notifications';  
import EditProfile from './app/pages/EditProfile/EditProfile';
import UpdatePassword from './app/pages/UpdatePassword/UpdatePassword'; 
import SessionsPage from './app/pages/Sessions/SessionsPage';  
import DeleteAccountPage from './app/pages/DeleteAccount/DeleteAccountPage';
import AccountDeletedPage from './app/pages/AccountDeleted/AccountDeletedPage'; 

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } /> 

        <Route path="/dividir-gastos" element={
          <PrivateRoute>
            <SplitBill />
          </PrivateRoute>
        } />

        <Route path="/viewProjects" element={
          <PrivateRoute>
            <ViewProjects />
          </PrivateRoute>
        } />

        <Route path="/projectCreate" element={
          <PrivateRoute>
            <ProjectCreate />
          </PrivateRoute>
        } />

        <Route path="/projectDetails/:projectName" element={
          <PrivateRoute>
            <ProjectDetails />
          </PrivateRoute>
        } />

        <Route path="/my-account" element={
          <PrivateRoute>
            <MyAccount />
          </PrivateRoute>
        } />

        <Route path="/my-account/notifications" element={
          <PrivateRoute>
            <Notifications />
          </PrivateRoute>
        } />

        <Route path="/edit-profile" element={
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        } />

        <Route path="/update-password" element={
          <PrivateRoute>
           <UpdatePassword />
          </PrivateRoute>
        } />
        <Route path="/my-account/sessions" element={
          <PrivateRoute>
            <SessionsPage />
          </PrivateRoute>
        } />
        <Route path="/my-account/delete-account" element={
          <PrivateRoute>
            <DeleteAccountPage />
          </PrivateRoute>
        } />
        
        <Route path="/account-deleted" element={<AccountDeletedPage />} />


      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Provider store={store}> 
      <AuthProvider>  
        <Router>
          <AnimatedRoutes />
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
