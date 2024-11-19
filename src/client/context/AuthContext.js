import React, {createContext, useContext, useState, useEffect} from 'react';
import {loginRequest, registerReq, verifyTokenRequest} from "../api/auth.js";
import Cookies from "js-cookie";
import {setUserData, setAuthenticated} from "../store/auth/authSlice.js";
import {useDispatch} from 'react-redux';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export const AuthProvider = ({children}) => {
  const [authInfo, setAuthInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const signUp = async (user) => {
    try {
      const res = await registerReq(user);
      if (res.status === 200) {
        dispatch(setUserData(res.data));
        setAuthInfo(res.data);
        console.log(res.data)
        dispatch(setAuthenticated(true));
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const signIn = async (user) => {
    try {
      const res = await loginRequest(user);
      if (res.data != null) {
        dispatch(setUserData(res.data));
        dispatch(setAuthenticated(true));
        setAuthInfo(res.data)
        return true;
      }
      console.log(res.data)
      return false;
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    dispatch(setUserData(null));
    dispatch(setAuthenticated(false));
    setAuthInfo(null);
  };

  const getLoggedUserInfo = async () => {
    const cookies = Cookies.get();
    console.log('cookies: ', cookies.token)
    if (!cookies.token) return null;
    const resp = await verifyTokenRequest(cookies.token);
    console.log('esto devolvió: ', resp.data)
    if(resp.data != null){
      setAuthInfo(resp.data);
      return resp.data;
    }
  }

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      console.log('la cookie: ', cookies.token)
      if (!cookies.token) {
        dispatch(setAuthenticated(false));
        setLoading(false);
        return;
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        console.log(res);
        if (!res.data) return dispatch(setAuthenticated(false));
        dispatch(setAuthenticated(true));
        dispatch(setUserData(res.data));
        setAuthInfo(res.data);
        setLoading(false);
      } catch (error) {
        dispatch(setAuthenticated(false));
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authInfo,
        signUp,
        signIn,
        logout,
        loading,
        getLoggedUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
