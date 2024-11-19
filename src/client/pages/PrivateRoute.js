import React from 'react';
import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useAuth} from "../context/AuthContext.js";

const PrivateRoute = ({children}) => {
  const {authInfo} = useAuth();
  return authInfo?.username ? children : <Navigate to="/login"/>;
};

export default PrivateRoute;
