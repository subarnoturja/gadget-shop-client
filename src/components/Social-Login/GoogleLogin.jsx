import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { Result } from 'postcss';

const GoogleLogin = () => {

    const { googleLogin } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result.user);
            navigate('/');
        })
    }

    return (
        <div>
           <div className='divider'>OR</div> 
           <div>
            <button onClick={handleGoogleLogin} className='btn btn-primary btn-outline w-full'>
            <FcGoogle size={24} />Google
            </button>
           </div>
        </div>
    );
};

export default GoogleLogin;