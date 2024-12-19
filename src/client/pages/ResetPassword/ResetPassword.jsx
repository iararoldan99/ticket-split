import { motion } from 'framer-motion';
import ResetPasswordForm from '../../components/forgotPass/ResetPasswordForm';
import NavbarSimple from '../../layout/Navbar/NavbarSimple';
import Footer from '../../layout/Footer/Footer';

const pageTransition = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.5 },
};

const ResetPassword = () => {
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
                    <ResetPasswordForm />
                    <Footer />
                </div>
            </motion.div>
        </>
    );
};

export default ResetPassword;