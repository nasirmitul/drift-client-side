import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import AdminDashboard from '../components/Dashboard/AdminDashboard';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';

const Admin = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className='admin-dashboard-layout container'>
                <AdminDashboard></AdminDashboard>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Admin;