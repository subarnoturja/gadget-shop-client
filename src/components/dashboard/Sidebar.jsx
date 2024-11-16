
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='bg-gray-200 border-r-2 border-black min-h-screen'>
            <ul>
                <li>
                    <Link to='/'>Overview</Link>
                </li>
                <li>
                    <Link to='/'>My Products</Link>
                </li>
                <li>
                    <Link to='/'>Add Products</Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <button>logout</button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;