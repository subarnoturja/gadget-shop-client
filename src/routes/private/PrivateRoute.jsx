import React from 'react';
import useAuth from '../../hooks/useAuth';
import LoadingPage from '../../pages/LoadingPage';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <LoadingPage />
    }

    if(user){
        return children
    }

    return <Navigate to='/' state={{from: location}} replace />
};

export default PrivateRoute;