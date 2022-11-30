import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
import logo from '../../images/logo.png'

const Navigation = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div className='navbar'>
            <div className="nav container">
                <div className="logo">
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </div>
                <div className="nav-links">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/blogs'>Blogs</NavLink>

                    <>
                        {isAdmin && <NavLink to='/dashboard'>Dashboard</NavLink>}
                    </>
                    <>
                        {isBuyer && <NavLink to='/dashboard/myOrders'>Dashboard</NavLink>}
                    </>
                    <>
                        {isSeller && <NavLink to='/dashboard/addProduct'>Dashboard</NavLink>}
                    </>
                    


                </div>
                <div className="get-started">

                    {
                        user ? <Link to='/profile'><img className='userImg' src={user?.photoURL}/></Link> : <Link to='/login'><button className='custom-button-outline'>Get Started</button></Link>
                    }

                </div>
            </div>

        </div>
    );
};

export default Navigation;