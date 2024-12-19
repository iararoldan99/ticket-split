import React, {useState} from 'react';
import {FaGoogle} from 'react-icons/fa';
import playStoreImg from '../../assets/img/App Store.svg';
import appImg from '../../assets/img/Google Play.svg';
import forgotPasswordImage from '../../assets/img/Mockups.svg';
import {Link, useNavigate} from 'react-router-dom';
import Modal from './Modal';
import {useUserInfo} from '../../context/UserContext';

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const {passwordResetRequestContext} = useUserInfo();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const success = await passwordResetRequestContext(email);
        if (success && validMail) {
            setShowModal(true);
        }
    };

    const validMail = email.includes('@') && email.includes('.');

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-12">
                    <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                        <img src={forgotPasswordImage} alt="Olvidé mi contraseña" className="w-full max-w-lg"/>
                    </div>

                    <div className="md:w-1/2 bg-white p-10 rounded-lg shadow-lg max-w-lg space-y-6">
                        <h1 className="text-3xl font-semibold text-center mb-8">Olvidé mi contraseña</h1>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Usuario o correo
                                    electrónico</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="Ingresa tu email"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={!validMail}
                                className={`w-full p-3 rounded-lg font-semibold transition-colors ${validMail ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-400 text-white'
                                }`}
                            >
                                Siguiente
                            </button>
                        </form>

                        <div className="flex items-center justify-center mt-8">
                            <div className="w-full h-px bg-gray-300"></div>
                            <span className="px-3 text-gray-400">o</span>
                            <div className="w-full h-px bg-gray-300"></div>
                        </div>

                        <button
                            className="w-full border border-gray-300 text-gray-700 p-3 rounded-lg flex items-center justify-center mt-4 hover:bg-gray-100">
                            <FaGoogle className="mr-3"/>
                            Ingresar con Google
                        </button>

                        <p className="text-center text-sm text-gray-500 mt-6">
                            ¿No tenés una cuenta?{' '}
                            <Link to="/registro" className="text-primary font-bold hover:underline">Regístrate</Link>
                        </p>

                        <div className="flex justify-center mt-10 space-x-4">
                            <img src={playStoreImg} alt="App Store"
                                 className="h-12 transition-transform duration-300 hover:scale-105"/>
                            <img src={appImg} alt="Google Play"
                                 className="h-12 transition-transform duration-300 hover:scale-105"/>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <Modal onClose={handleCloseModal}>
                    <h2 className="text-2xl font-bold text-center mb-4">Correo enviado</h2>
                    <p className="text-center mb-6">Hemos enviado un enlace para restablecer tu contraseña a tu correo
                        electrónico.</p>
                    <button
                        onClick={handleCloseModal}
                        className="bg-green-500 bg-primary text-white font-semibold py-2 px-6 rounded-lg w-full"
                    >
                        Aceptar
                    </button>
                </Modal>
            )}
        </>
    );
};

export default ForgotPasswordForm;
