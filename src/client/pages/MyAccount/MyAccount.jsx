import React from 'react';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import SidebarNavigation from '../../components/myAccount/SidebarNavigation';
import UserHeader from '../../components/myAccount/UserHeader';
import Footer from '../../layout/Footer/Footer';
import AccountForm from '../../components/myAccount/AccountForm';
import {useSelector} from "react-redux";

const MyAccount = () => {
    const {user} = useSelector((state) => state.user);

    const fields = [
        {
            name: 'username',
            label: 'Nombre de usuario',
            type: 'text',
            value: user?.username,
            readOnly: true,
        },
        {
            name: 'email',
            label: 'Correo electrónico',
            type: 'email',
            value: user?.email,
            readOnly: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <NavbarDashboard/>
            <div className="min-h-screen flex flex-col justify-between bg-white">
                <div className="w-full flex flex-col lg:flex-row mt-10 px-6 lg:px-8 space-y-10 lg:space-y-0 lg:ml-40">
                    <div>
                        <UserHeader userName={user?.username} sectionName="Mi cuenta"/>
                        <SidebarNavigation/>
                    </div>

                    <div className="w-full lg:w-3/4 p-8 mt-16">
                        <AccountForm fields={fields}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default MyAccount;
