import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import { AuthContext } from '../contexts/UserContext';
import useBuyer from '../hooks/useBuyer';

const BuyerRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const [isBuyer, isBuyerLoading] = useBuyer(user?.email)
    const location = useLocation();

    if (loading || isBuyerLoading) {
        return <Spinner></Spinner>
    }

    if (user && isBuyer) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default BuyerRoute;