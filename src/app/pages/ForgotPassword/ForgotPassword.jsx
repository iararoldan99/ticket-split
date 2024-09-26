import React from 'react';
import ForgotPasswordForm from '../../components/forgotPass/ForgotPasswordForm';
import NavbarSimple from '../../layout/Navbar/NavbarSimple';
import Footer from '../../layout/Footer/Footer';
import { motion } from 'framer-motion';

const pageTransition = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.5 },
};

const ForgotPassword = () => {
    return (
        <>
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
                transition={pageTransition.transition}
            >
                <div>
                    <NavbarSimple />
                    <ForgotPasswordForm />
                    <Footer />
                </div>
            </motion.div>
        </>
    );
};

export default ForgotPassword;