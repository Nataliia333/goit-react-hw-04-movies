import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.NavlinksList}>
      <NavLink
        to="/"
        className={styles.NavLink}
        activeClassName={styles.ActiveNavLink}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className={styles.NavLink}
        activeClassName={styles.ActiveNavLink}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
