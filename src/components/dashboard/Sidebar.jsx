
import { GrOverview } from 'react-icons/gr';
import { IoHomeOutline } from 'react-icons/io5';
import { LuLogOut } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='bg-gray-200 border-r-2 border-black min-h-screen px-9 py-16'>
            <h1 className='text-3xl font-bold mb-8'>Gadget Shop</h1>
            <ul className='flex flex-col gap-2'>
                <li className='p-3 border border-black rounded-lg'>
                    <NavLink to='/dashboard/overview' className="flex items-center gap-2">
                    <GrOverview />
                    <p>Overview</p>
                    </NavLink>
                </li>
                <li className='p-3 border border-black rounded-lg'>
                    <NavLink to='/' className="flex items-center gap-2">
                    <IoHomeOutline />
                    <p>Home</p>
                    </NavLink>
                </li>
                <li className='p-3 border border-black rounded-lg'>
                    <NavLink to='/dashboard/overview' className="flex items-center gap-2">
                    <LuLogOut />
                    <p>logout</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;