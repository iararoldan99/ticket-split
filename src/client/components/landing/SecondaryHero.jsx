import saludoImg from '../../assets/img/Group.svg';

const SecondaryHero = () => {
    return (
        <section>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                <div className="md:w-1/2 text-left mb-8 md:mb-0">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Lleva un control de las cuentas con tu compañero de piso sin pensar demasiado.
                    </h2>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img src={saludoImg} alt="Control de cuentas" className="w-2/3 sm:w-full" />
                </div>
            </div>
        </section>
    );
};

export default SecondaryHero;