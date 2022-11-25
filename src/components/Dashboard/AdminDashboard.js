import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className=''>
            <div className="admin-side-navigation">
                <NavLink to='/dashboard'>All Sellers</NavLink>
                <NavLink to='/dashboard/allBuyers'>All Buyers</NavLink>
                <NavLink to='/dashboard/myOrders'>My Orders</NavLink>
            </div>
        </div>
    );
};

export default AdminDashboard;