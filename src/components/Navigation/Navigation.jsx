import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" exact className={styles.link} activeClassName={styles.activeLink}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={styles.link} activeClassName={styles.activeLink}>
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
