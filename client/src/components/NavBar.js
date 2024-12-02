import Logo from '../assets/Logo.png';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.container}>
      <img src={Logo} className={styles.logo} />
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#home" className={styles.navLink}>
            Play
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#about" className={styles.navLink}>
            Portfolio
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#services" className={styles.navLink}>
            About us
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
