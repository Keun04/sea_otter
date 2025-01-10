import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import styles from './NavBar.module.css';
import { useState } from 'react';
import FancyButton from './FancyButton';

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
        <FancyButton />
        {/* {menuItems.map((item) => (
          <div className={styles.navItem}>
            <span onClick={() => handleClickNavItem('')} className={`${styles.navLink} ${styles.defaultText}`}>
              {item.defaultText}
            </span>
            <span onClick={() => handleClickNavItem('')} className={`${styles.navLink} ${styles.hoverText}`}>
              {item.hoverText}
            </span>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default NavBar;
