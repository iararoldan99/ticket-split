import React, {createContext, useContext, useState, useEffect} from 'react';
import Cookies from "js-cookie";
import {useDispatch} from 'react-redux';
import {loginRequest, registerReq, verifyTokenRequest} from "../api/user.js";
import {setAuthenticated, setFriends, setUserData} from "../store/user/userSlice.js";
const UserContext = createContext();

export const useUserInfo = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUserInfo must be used within UserProvider");
  return context;
};

export const UserProvider = ({children}) => {
  const [authInfo, setAuthInfo] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [friendsData, setFriendsData] = useState(null);
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

  const getFriends = async () => {
    try {
      const res = await getFriends();
      if (res.data != null) {
        dispatch(setFriends(res.data));
        setFriendsData(res.data)
        return true;
      }
      console.log(res.data)
      return false;
    } catch (error) {
      console.log(error);
    }
  };

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
    <UserContext.Provider
      value={{
        authInfo,
        signUp,
        signIn,
        logout,
        loading,
        getLoggedUserInfo,
        userInfo,
        friendsData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
