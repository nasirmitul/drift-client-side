import React from 'react';
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;