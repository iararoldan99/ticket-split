import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useSelector((state) => state.user);

  // Chequea si el usuario está autenticado
  const isAuthenticated = user && user.isAuthenticated;

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>Cargando...</div>; // Pantalla de carga
  }

  // Si está autenticado muestra los hijos, si no redirige al login
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
