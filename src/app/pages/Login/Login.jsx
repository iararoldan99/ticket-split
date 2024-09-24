import React from 'react';
import NavbarSimple from '../../layout/Navbar/NavbarSimple';
import LoginForm from '../../components/login/LoginForm';
import Footer from '../../layout/Footer/Footer';

const Login = () => {
  return (
    <div>
      <NavbarSimple />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
