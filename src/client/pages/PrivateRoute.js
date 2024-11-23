import React from 'react';
import {Navigate} from 'react-router-dom';
import {useUserInfo} from "../context/UserContext.js";

const PrivateRoute = ({children}) => {
  const {userInfo} = useUserInfo();
  return userInfo?.username ? children : <Navigate to="/login"/>;
};

export default PrivateRoute;
