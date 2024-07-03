import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/register" exact className={styles.link} activeClassName={styles.activeLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={styles.link} activeClassName={styles.activeLink}>
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
