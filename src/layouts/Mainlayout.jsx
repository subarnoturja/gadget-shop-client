import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Mainlayout = () => {
  return (
    <div>
        <div className=' bg-base-100'>
          <Navbar />
        </div>
        <div className='min-h-screen'>
          <Outlet></Outlet>
        </div>
        <div>
          <Footer /> 
        </div>
    </div>
  )
}

export default Mainlayout;