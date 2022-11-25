import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';

const Admin = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div>
                <Dashboard></Dashboard>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Admin;