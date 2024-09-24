import React from 'react';
//import logo from '../../assets/img/Icon.svg';
import mobileAppImage from '../../assets/img/Group 1948759423 (1).svg';
import { FaGoogle } from 'react-icons/fa';

const LoginForm = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img src={mobileAppImage} alt="Mobile App" className="w-2/3 md:w-full" />
        </div>

        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg max-w-md">
          <h1 className="text-2xl font-semibold text-center mb-6">Iniciar sesión</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Usuario o correo electrónico</label>
              <input
                type="email"
                className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Ingresa tu email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Contraseña</label>
              <input
                type="password"
                className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Ingresa tu contraseña"
              />
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-primary text-sm">¿Olvidaste tu contraseña?</a>
            </div>
            <button className="w-full bg-gray-400 text-white p-3 rounded-lg font-semibold hover:bg-gray-500">
              Iniciar sesión
            </button>
          </form>

          <div className="flex items-center justify-center mt-6">
            <div className="w-full h-px bg-gray-300"></div>
            <span className="px-3 text-gray-400">o</span>
            <div className="w-full h-px bg-gray-300"></div>
          </div>
          <button className="w-full border border-gray-300 text-gray-700 p-3 rounded-lg flex items-center justify-center mt-4 hover:bg-gray-100">
            <FaGoogle className="mr-3" />
            Ingresar con Google
          </button>

          <div className="text-center mt-4">
            <p className="text-sm">¿No tenés una cuenta? <a href="#" className="text-primary">Regístrate</a></p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 space-x-4">
        <img src="/path-to-appstore-image" alt="App Store" className="h-12" />
        <img src="/path-to-playstore-image" alt="Google Play" className="h-12" />
      </div>

      <footer className="mt-12 text-gray-600 text-sm">
        <div className="flex justify-center space-x-6">
          <a href="#">Sobre nosotros</a>
          <a href="#">Ayuda</a>
          <a href="#">Términos y condiciones</a>
          <a href="#">Carreras</a>
        </div>
        <p className="mt-4 text-center">© 2024 SplitTheBill. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default LoginForm;
