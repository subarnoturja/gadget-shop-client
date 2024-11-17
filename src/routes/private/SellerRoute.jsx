import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from '../../pages/LoadingPage';
import useUserData from '../../hooks/useUserData';

const SellerRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const userData = useUserData();
    const location = useLocation();

    if(loading || !userData.role){
        return <LoadingPage />
    }

    if(user && userData.role === "seller"){
        return children
    }

    return <Navigate to='/' state={{from: location}} replace />
};

export default SellerRoute;