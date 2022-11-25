import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/logo.png'

const Navigation = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='navbar'>
            <div className="nav container">
                <div className="logo">
                    <Link to='/'><img src={logo} alt="logo" /><p>Drift</p></Link>
                </div>
                <div className="nav-links">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/blogs'>Blogs</NavLink>
                    <NavLink to='/dashboard'>Dashboard</NavLink>
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