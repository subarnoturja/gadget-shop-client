import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';

const Dashboardlayout = () => {
    return (
        <div className='grid lg:grid-cols-12'>
            {/* sidebar */}
           <div className='col-span-2'>
            <Sidebar></Sidebar>
           </div>
           {/* outlet */}
           <div className='col-span-10 p-12'>
                <Outlet></Outlet>
            </div> 
        </div>
    );
};

export default Dashboardlayout;