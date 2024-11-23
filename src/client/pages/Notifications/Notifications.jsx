import React from 'react';
import {useSelector} from 'react-redux';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import Footer from '../../layout/Footer/Footer';
import SidebarNavigation from '../../components/myAccount/SidebarNavigation';
import HeaderIcon from '../../components/myAccount/UserHeader';
import NotificationsForm from '../../components/notifications/NotificationsForm';
import {useUserInfo} from "../../context/UserContext.js";

const Notifications = () => {
    const {user} = useSelector((state) => state.user);

    return (
        <>
            <NavbarDashboard/>

            <div className="min-h-screen flex flex-col justify-between bg-white">
                <div className="w-full flex flex-col lg:flex-row mt-10 px-6 lg:px-8 space-y-10 lg:space-y-0 lg:ml-40">

                    <div>
                        <HeaderIcon userName={user?.username} sectionName="Notificaciones"/>
                        <SidebarNavigation/>
                    </div>

                    <div className="w-full lg:w-3/4 p-8 mt-10 lg:mt-0 lg:-ml-12">
                        <NotificationsForm/>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
};

export default Notifications;
