import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import styles from './NavBar.module.css';
import { useState } from 'react';

function NavBar() {
  const navigate = useNavigate();

  const handleClickNavItem = (title) => {
    navigate(`/${title}`);
  };

  const menuItems = [
    { id: 1, defaultText: 'Play', hoverText: 'Day' },
    { id: 2, defaultText: 'Portfolio', hoverText: 'Night' },
    { id: 3, defaultText: 'About us', hoverText: 'Sunset' },
  ];

  return (
    <div className={styles.container}>
      <img src={Logo} className={styles.logo} onClick={() => handleClickNavItem('')} />
      <div className={styles.navList}>
        {menuItems.map((item) => (
          <div className={styles.navItem}>
            <span onClick={() => handleClickNavItem('')} className={`${styles.navLink} ${styles.defaultText}`}>
              {item.defaultText}
            </span>
            <span onClick={() => handleClickNavItem('')} className={`${styles.navLink} ${styles.hoverText}`}>
              {item.hoverText}
            </span>
          </div>
        ))}
      </div>

      {/* <li className={styles.navItem}>
          <a onClick={() => handleClickNavItem('')} className={styles.navLink}>
            Play
          </a>
        </li>
        <li className={styles.navItem}>
          <a onClick={() => handleClickNavItem('night')} className={styles.navLink}>
            Portfolio
          </a>
        </li>
        <li className={styles.navItem}>
          <a onClick={() => handleClickNavItem('sunset')} className={styles.navLink}>
            About us
          </a>
        </li> */}
    </div>
  );
}

export default NavBar;
