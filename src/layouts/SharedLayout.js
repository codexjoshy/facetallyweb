import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';
import { Footer } from './Footer';
const SharedLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default SharedLayout;
