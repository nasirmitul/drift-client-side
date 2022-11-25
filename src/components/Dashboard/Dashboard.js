import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='container'>
            <div className="side-navigation">
                <NavLink to='/dashboard'>All Sellers</NavLink>
                <NavLink to='/dashboard/allBuyers'>All Buyers</NavLink>
            </div>
        </div>
    );
};

export default Dashboard;