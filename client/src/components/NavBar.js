import Logo from '../assets/Logo.png';
import styles from './NavBar.module.css';

function NavBar() {
  const handleClickNavItem = (name) => {
    navigate(`/${name}`); /* 페이지 이동 */
  };

  return (
    <div className={styles.container}>
      <img src={Logo} className={styles.logo} />
      <ul className={styles.navList}>
        <li className={styles.navItem}>
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
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
