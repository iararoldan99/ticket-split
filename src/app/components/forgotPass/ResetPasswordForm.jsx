import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal'; 

const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChangeValid, setChangeValid] = useState(false);
  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
    match: false,
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const passwordIsValid =
      passwordCriteria.length &&
      passwordCriteria.uppercase &&
      passwordCriteria.lowercase &&
      passwordCriteria.number &&
      passwordCriteria.specialChar &&
      passwordCriteria.match;

    setChangeValid(passwordIsValid);
  }, [passwordCriteria]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword === confirmPassword) {
      setShowModal(true);
    } else {
      setErrorMessage('Las contraseñas no coinciden.');
    }
  };

  const validatePassword = (password) => {
    const criteria = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      specialChar: /\W/.test(password),
      match: password === confirmPassword,
    };
    setPasswordCriteria(criteria);

    if (password && confirmPassword) {
      if (password !== confirmPassword) {
        setErrorMessage('Las contraseñas no coinciden.');
      } else if (!criteria.length) {
        setErrorMessage('La contraseña debe tener al menos 8 caracteres.');
      } else if (!criteria.uppercase) {
        setErrorMessage('La contraseña debe tener al menos una letra mayúscula.');
      } else if (!criteria.lowercase) {
        setErrorMessage('La contraseña debe tener al menos una letra minúscula.');
      } else if (!criteria.number) {
        setErrorMessage('La contraseña debe tener al menos un número.');
      } else if (!criteria.specialChar) {
        setErrorMessage('La contraseña debe tener al menos un carácter especial.');
      } else {
        setErrorMessage(''); 
      }
    }
  };

  useEffect(() => {
    if (newPassword || confirmPassword) {
      validatePassword(newPassword);
    } else {
      setErrorMessage(''); 
    }
  }, [newPassword, confirmPassword]);

  const handleModalClose = () => {
    setShowModal(false); 
    navigate('/login'); 
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center">
        <div className="container mx-auto flex flex-col justify-center items-center px-6 py-12">
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg max-w-md">
            <h1 className="text-2xl font-semibold text-center mb-6">Restablecer contraseña</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Nueva contraseña</label>
                <input
                  type="password"
                  className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ingresa tu nueva contraseña"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Confirmar nueva contraseña</label>
                <input
                  type="password"
                  className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Confirma tu nueva contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              {errorMessage && (
                <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
              )}

              <button
                type="submit"
                className={`py-3 px-6 rounded-lg w-full font-bold text-lg mt-4 ${
                  isChangeValid ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-400 text-gray-300 cursor-not-allowed'
                }`}
                disabled={!isChangeValid}
              >
                Restablecer contraseña
              </button>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal onClose={handleModalClose}>
          <h2 className="text-2xl font-bold text-center mb-4">Contraseña restablecida</h2>
          <p className="text-center mb-6">Tu contraseña ha sido actualizada exitosamente.</p>
          <button
            onClick={handleModalClose}
            className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg w-full"
          >
            Aceptar
          </button>
        </Modal>
      )}
    </>
  );
};

export default ResetPasswordForm;