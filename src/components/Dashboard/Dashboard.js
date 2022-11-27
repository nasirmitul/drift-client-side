import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);


    return (
        <div className=''>
            <div className="admin-side-navigation">

                {
                    isAdmin &&
                    <>
                        <NavLink to='/dashboard'>All Sellers</NavLink>
                        <NavLink to='/dashboard/allBuyers'>All Buyers</NavLink>
                    </>
                }
                {
                    isBuyer &&
                    <>
                        <NavLink to='/dashboard/myOrders'>My Orders</NavLink>
                    </>
                }
                {
                    isSeller &&
                    <>
                        <NavLink to='/dashboard/addProduct'>Add Product</NavLink>
                        <NavLink to='/dashboard/myProduct'>My Product</NavLink>
                    </>
                }
            </div>
        </div>
    );
};

export default Dashboard;
