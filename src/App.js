import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { AnimatePresence } from 'framer-motion';
import { store } from './client/store/store'; 
import AuthProvider from './client/context/AuthContext'; 
import Landing from './client/pages/Landing/Landing';
import Login from './client/pages/Login/Login';
import Registro from './client/pages/Registro/Registro';
import Dashboard from './client/pages/Dashboard/Dashboard'; 
import SplitBill from './client/pages/SplitBill/SplitBill';
import PrivateRoute from './client/pages/PrivateRoute';
import ForgotPassword from './client/pages/ForgotPassword/ForgotPassword';
import ResetPassword from './client/pages/ResetPassword/ResetPassword';  
import ViewProjects from './client/pages/ViewProjects/ViewProjects';
import ProjectCreate from './client/pages/ProjectCreate/ProjectCreate';
import ProjectDetails from './client/pages/ProjectDetails/ProjectDetails';
import MyAccount from './client/pages/MyAccount/MyAccount';  
import Notifications from './client/pages/Notifications/Notifications';  
import EditProfile from './client/pages/EditProfile/EditProfile';
import UpdatePassword from './client/pages/UpdatePassword/UpdatePassword'; 
import SessionsPage from './client/pages/Sessions/SessionsPage';  
import DeleteAccountPage from './client/pages/DeleteAccount/DeleteAccountPage';
import AccountDeletedPage from './client/pages/AccountDeleted/AccountDeletedPage'; 
import { ROUTES } from './client/constants/constants';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path={ROUTES.APP_ROUTE} element={<Landing />} />
        <Route path={ROUTES.LOGIN_ROUTE} element={<Login />} />
        <Route path={ROUTES.REGISTER_ROUTE} element={<Registro />} />
        <Route path={ROUTES.FORGOT_PASSWORD_ROUTE} element={<ForgotPassword />} />
        <Route path={ROUTES.RESET_PASSWORD_ROUTE} element={<ResetPassword />} />

        <Route path={ROUTES.DASHBOARD_ROUTE} element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } /> 

        <Route path={ROUTES.SPLIT_BILL_ROUTE} element={
          <PrivateRoute>
            <SplitBill />
          </PrivateRoute>
        } />

        <Route path={ROUTES.VIEW_PROJECTS_ROUTE} element={
          <PrivateRoute>
            <ViewProjects />
          </PrivateRoute>
        } />

        <Route path={ROUTES.CREATE_PROJECTS_ROUTE} element={
          <PrivateRoute>
            <ProjectCreate />
          </PrivateRoute>
        } />

        <Route path={`${ROUTES.PROJECT_DETAILS_ROUTE}/:projectName`} element={
          <PrivateRoute>
            <ProjectDetails />
          </PrivateRoute>
        } />

        <Route path={ROUTES.MY_ACCOUNT_ROUTE} element={
          <PrivateRoute>
            <MyAccount />
          </PrivateRoute>
        } />

        <Route path={ROUTES.NOTIFICATIONS_ROUTE} element={
          <PrivateRoute>
            <Notifications />
          </PrivateRoute>
        } />

        <Route path={ROUTES.EDIT_PROFILE_ROUTE} element={
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        } />

        <Route path={ROUTES.UPDATE_PASSWORD_ROUTE} element={
          <PrivateRoute>
           <UpdatePassword />
          </PrivateRoute>
        } />
        
        <Route path={ROUTES.SESSIONS_ROUTE} element={
          <PrivateRoute>
            <SessionsPage />
          </PrivateRoute>
        } />
        
        <Route path={ROUTES.DELETE_ACCOUNT_ROUTE} element={
          <PrivateRoute>
            <DeleteAccountPage />
          </PrivateRoute>
        } />
        
        <Route path={ROUTES.ACCOUNT_DELETED_ROUTE} element={<AccountDeletedPage />} />
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
