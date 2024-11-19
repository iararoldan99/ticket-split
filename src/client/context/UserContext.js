import React, {createContext, useContext, useState, useEffect} from 'react';
import Cookies from "js-cookie";
import {setUserData, setAuthenticated} from "../store/auth/authSlice.js";
import {useDispatch} from 'react-redux';
import {getUser} from "../api/user.js";

const UserContext = createContext();

export const useUserInfo = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUserInfo must be used within UserProvider");
  return context;
};

export const UserProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getUserInfo = async (user) => {
    try {
      const res = await getUserInfo(user);
      if (res.data != null) {
        dispatch(setUserData(res.data));
        dispatch(setAuthenticated(true));
        setUserInfo(res.data)
        return true;
      }
      console.log(res.data)
      return false;
    } catch (error) {
      console.log(error);
    }
  };

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
        const res = await getUser(cookies.token);
        console.log(res);
        if (!res.data) return dispatch(setAuthenticated(false));
        dispatch(setAuthenticated(true));
        dispatch(setUserData(res.data));
        setUserInfo(res.data);
        setLoading(false);
      } catch (error) {
        dispatch(setAuthenticated(false));
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <UserContext.Provider
      value={{
        loading,
        userInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
