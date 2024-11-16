import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className='min-h-screen min-w-screen flex justify-center items-center'>
           <HashLoader
        color="#000000"
        loading={true}
        size={150}
      /> 
        </div>
    );
};

export default LoadingPage;