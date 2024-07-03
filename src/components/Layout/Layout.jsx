import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
