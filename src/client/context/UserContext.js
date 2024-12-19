import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from "js-cookie";
import { useDispatch } from 'react-redux';
import {
  loginRequest,
  logoutRequest,
  registerReq,
  verifyTokenRequest,
  requestPasswordReset,
  resetPassword,
  deleteUserById,
  getUserByEmailApi,
  getUserByIdApi,
} from "../api/user.js";
import { setAuthenticated, setUserData } from "../store/user/userSlice.js";
import { setMovementsData } from "../store/movements/movementSlice.js";
import { setProjectsData } from "../store/project/projectSlice.js";
import MovementContext from "./MovementContext.js";
import ProjectContext from "./ProjectContext.js";

const UserContext = createContext();

export const useUserInfo = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUserInfo must be used within UserProvider");
  return context;
};

export const UserProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [friendsData, setFriendsData] = useState(null);
  const dispatch = useDispatch();

  // Contextos de movimientos y proyectos
  const movementContext = useContext(MovementContext);
  const projectContext = useContext(ProjectContext);

  // INICIO DE SESIÓN
  const signInContext = async (user) => {
    try {
      const res = await loginRequest(user);
      if (res.data) {
        dispatch(setUserData(res.data));
        dispatch(setAuthenticated(true));
        setAuthInfo(res.data);
        setUserInfo(res.data);

        const movements = await movementContext.getAllMovements();
        const projects = await projectContext.getAllProjects();

        dispatch(setMovementsData(movements));
        dispatch(setProjectsData(projects));

        return true;
      }
      return false;
    } catch (error) {
      console.error("Error logging in:", error);
      return false;
    }
  };

  // CIERRE DE SESIÓN
  const logoutContext = async () => {
    try {
      await logoutRequest();
      Cookies.remove("token");
      dispatch(setUserData(null));
      dispatch(setMovementsData([]));
      dispatch(setProjectsData([]));
      dispatch(setAuthenticated(false));
      setAuthInfo(null);
      setUserInfo(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // REGISTRO DE USUARIO
  const signUpContext = async (user) => {
    try {
      const res = await registerReq(user);
      if (res.status === 200) {
        dispatch(setUserData(res.data));
        setAuthInfo(res.data);
        setUserInfo(res.data);
        dispatch(setAuthenticated(true));
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  // RESET PASSWORD REQUEST
  const passwordResetRequestContext = async (email) => {
    try {
      const res = await requestPasswordReset(email);
      return res.status === 200;
    } catch (error) {
      console.error("Error requesting password reset:", error);
      return false;
    }
  };

  // RESET PASSWORD
  const passwordResetContext = async (token, newPassword) => {
    try {
      const res = await resetPassword(token, newPassword);
      return res.status === 200;
    } catch (error) {
      console.error("Error resetting password:", error);
      return false;
    }
  };

  // OBTENER USUARIO POR EMAIL
  const getUserByEmail = async (email) => {
    try {
      const res = await getUserByEmailApi(email);
      return res.data || null;
    } catch (error) {
      console.error("Error fetching user by email:", error);
      return null;
    }
  };

  // OBTENER USUARIO POR ID
  const getUserById = async (id) => {
    try {
      const res = await getUserByIdApi(id);
      return res.data || null;
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      return null;
    }
  };

  // ELIMINAR USUARIO POR ID
  const deleteUserByIdContext = async (id) => {
    try {
      const res = await deleteUserById(id);
      if (res.status === 200) {
        setUserInfo(null);
        setAuthInfo(null);
        dispatch(setAuthenticated(false));
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error deleting user:", error);
      return false;
    }
  };

  // VERIFICAR TOKEN AL REFRESCAR LA PÁGINA
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await verifyTokenRequest();
        if (res.data) {
          dispatch(setAuthenticated(true));
          dispatch(setUserData(res.data));
          setUserInfo(res.data);

          const movements = await movementContext.getAllMovements();
          const projects = await projectContext.getAllProjects();

          dispatch(setMovementsData(movements));
          dispatch(setProjectsData(projects));
        } else {
          dispatch(setAuthenticated(false));
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        dispatch(setAuthenticated(false));
      } finally {
        setLoading(false);
      }
    };
    checkLogin();
  }, [dispatch]);

  return (
    <UserContext.Provider
      value={{
        authInfo,
        userInfo,
        loading,
        signInContext,
        logoutContext,
        signUpContext,
        passwordResetRequestContext,
        passwordResetContext,
        getUserByEmail,
        getUserById,
        deleteUserByIdContext,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
