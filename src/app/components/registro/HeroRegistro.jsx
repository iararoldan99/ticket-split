import React from 'react';
import FormRegistro from '../../components/registro/FormRegistro';
import picRegistro from '../../assets/img/Signup-img.svg';

const HeroRegistro = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Formulario enviado");
    };

    return (
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center mt-0">            <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-6">Te damos la bienvenida</h1>
            <p>¿Ya tenés una cuenta? <a href="/login" className="text-primary">Iniciar sesión</a></p>
            <FormRegistro onSubmit={handleSubmit} />
        </div>
            <div className="md:w-1/2">
                <img src={picRegistro} alt="Bienvenida" className="w-full" />
            </div>
        </div>
    );
};

export default HeroRegistro;