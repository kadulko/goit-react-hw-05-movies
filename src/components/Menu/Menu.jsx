import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

function Menu() {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles['nav-item']} to="/" end>
        Home
      </NavLink>
      <NavLink className={styles['nav-item']} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
}

export default Menu;
