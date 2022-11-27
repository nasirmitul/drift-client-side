import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Profile = () => {
    const navigate = useNavigate();
    const {user, logoutUser} = useContext(AuthContext)
    const handleLogOut = () => {
        logoutUser()
            .then(() => {
                navigate('/login')
            })
            .catch((error) => console.log(error))
    }
    return (
        <div className='container'>
            <h1>Name: {user?.displayName}</h1>
            <strong>Email: {user?.email}</strong> <br /> <br /> <br />
            <button onClick={handleLogOut} className="custom-button-outline">Logout</button>
        </div>
    );
};

export default Profile;