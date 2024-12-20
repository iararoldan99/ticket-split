import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { store } from './client/store/store.js';
import { UserProvider } from './client/context/UserContext.js';
import { MovementProvider } from './client/context/MovementContext.js';
import { ProjectProvider } from './client/context/ProjectContext.js';
import PrivateRoute from './client/pages/PrivateRoute.js';
import Landing from './client/pages/Landing/Landing.jsx';
import Login from './client/pages/Login/Login.jsx';
import Registro from './client/pages/Registro/Registro.jsx';
import Dashboard from './client/pages/Dashboard/Dashboard.jsx';
import SplitBill from './client/pages/SplitBill/SplitBill.jsx';
import ForgotPassword from './client/pages/ForgotPassword/ForgotPassword.jsx';
import ResetPassword from './client/pages/ResetPassword/ResetPassword.jsx';
import ViewProjects from './client/pages/ViewProjects/ViewProjects.jsx';
import CreateProject from './client/pages/CreateProject/CreateProject.jsx';
import MyAccount from './client/pages/MyAccount/MyAccount.jsx';
import Notifications from './client/pages/Notifications/Notifications.jsx';
import EditProfile from './client/pages/EditProfile/EditProfile.jsx';
import UpdatePassword from './client/pages/UpdatePassword/UpdatePassword.jsx';
import SessionsPage from './client/pages/Sessions/SessionsPage.jsx';
import DeleteAccountPage from './client/pages/DeleteAccount/DeleteAccountPage.jsx';
import AccountDeletedPage from './client/pages/AccountDeleted/AccountDeletedPage.jsx';
import ProjectDetail from './client/pages/ViewProject/ViewProject.jsx';
import ViewProject from './client/pages/ViewProject/ViewProject.jsx';
import { ROUTES } from './client/constants/constants.js';

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

        {/* Rutas protegidas */}
        <Route
          path={ROUTES.DASHBOARD_ROUTE}
          element={
              <Dashboard />
          }
        />
        <Route
          path={ROUTES.SPLIT_BILL_ROUTE}
          element={
              <SplitBill />
          }
        />
        <Route
          path={ROUTES.VIEW_PROJECTS_ROUTE}
          element={
              <ViewProjects />
          }
        />
        <Route
          path={ROUTES.VIEW_INDIVIDUAL_PROJECT_ROUTE}
          element={
              <ViewProject />
          }
        />
        <Route
          path={ROUTES.CREATE_PROJECTS_ROUTE}
          element={
              <CreateProject />
          }
        />
        <Route
          path={`${ROUTES.PROJECT_DETAILS_ROUTE}/:projectId`}
          element={
              <ProjectDetail />
          }
        />
        <Route
          path={ROUTES.MY_ACCOUNT_ROUTE}
          element={
              <MyAccount />
          }
        />
        <Route
          path={ROUTES.NOTIFICATIONS_ROUTE}
          element={
              <Notifications />
          }
        />
        <Route
          path={ROUTES.EDIT_PROFILE_ROUTE}
          element={
              <EditProfile />
          }
        />
        <Route
          path={ROUTES.UPDATE_PASSWORD_ROUTE}
          element={
              <UpdatePassword />
          }
        />
        <Route
          path={ROUTES.SESSIONS_ROUTE}
          element={
              <SessionsPage />
          }
        />
        <Route
          path={ROUTES.DELETE_ACCOUNT_ROUTE}
          element={
              <DeleteAccountPage />
          }
        />
        <Route
          path={ROUTES.ACCOUNT_DELETED_ROUTE}
          element={<AccountDeletedPage />}
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Provider store={store}>
      <MovementProvider>
        <ProjectProvider>
          <UserProvider>
            <Router>
              <AnimatedRoutes />
            </Router>
          </UserProvider>
        </ProjectProvider>
      </MovementProvider>
    </Provider>
  );
}

export default App;
