import React, {useState, useEffect} from 'react';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import {useUserInfo} from "../../context/UserContext.js";

const FormRegistro = () => {
    const {signUpContext, errors: registerErrors, isAuthenticated} = useUserInfo();
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [passwordCriteria, setPasswordCriteria] = useState({
        length: false, uppercase: false, lowercase: false, number: false, specialChar: false,
    });

    useEffect(() => {
        const emailIsValid = email.includes('@') && email.includes('.');
        const usernameIsValid = username.length > 3;
        const passwordIsValid = passwordCriteria.length && passwordCriteria.uppercase && passwordCriteria.lowercase && passwordCriteria.number && passwordCriteria.specialChar;

        setIsFormValid(emailIsValid && usernameIsValid && passwordIsValid);
        if (isAuthenticated) {
            navigate("/dashboard")
        }
    }, [isAuthenticated, email, username, passwordCriteria]);


    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validatePassword(newPassword);
    };

    const validatePassword = (newPassword) => {
        const criteria = {
            length: newPassword.length >= 8,
            uppercase: /[A-Z]/.test(newPassword),
            lowercase: /[a-z]/.test(newPassword),
            number: /\d/.test(newPassword),
            specialChar: /\W/.test(newPassword),
        };
        setPasswordCriteria(criteria);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await signUpContext({email, username, password});
        navigate('/dashboard');
    };

    return (<form onSubmit={handleSubmit} className="space-y-4">
        <label className="block mb-2">Email</label>
        <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="border border-gray-300 p-3 w-full mb-4 rounded-lg"
            placeholder="Ingresa tu email"
        />

        <label className="block mb-2">Usuario</label>
        <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="border border-gray-300 p-3 w-full mb-4 rounded-lg"
            placeholder="Ingresa tu usuario"
        />

        <label className="block mb-2">Contraseña</label>
        <div className="relative">
            <input
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                className="border border-gray-300 p-3 w-full mb-4 rounded-lg"
                placeholder="Ingresa tu contraseña"
            />
            <button
                type="button"
                className="absolute right-4 top-3 text-gray-600"
                onClick={togglePasswordVisibility}
            >
                {passwordVisible ? <FaEyeSlash/> : <FaEye/>}
            </button>
        </div>

        <div className="text-sm text-gray-600 space-y-2">
            <p className={passwordCriteria.length ? "text-green-500" : "text-gray-600"}>● Usá 8 caracteres o más</p>
            <p className={passwordCriteria.uppercase ? "text-green-500" : "text-gray-600"}>● Una mayúscula</p>
            <p className={passwordCriteria.lowercase ? "text-green-500" : "text-gray-600"}>● Una minúscula</p>
            <p className={passwordCriteria.number ? "text-green-500" : "text-gray-600"}>● Un número</p>
            <p className={passwordCriteria.specialChar ? "text-green-500" : "text-gray-600"}>● Un carácter
                especial</p>
        </div>

        <button
            type="submit"
            className={`py-3 px-6 rounded-lg w-full font-bold text-lg mt-4 ${isFormValid ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-400 text-gray-300 cursor-not-allowed'}`}
            disabled={!isFormValid}
        >
            Crear cuenta
        </button>
    </form>);
};

export default FormRegistro;
