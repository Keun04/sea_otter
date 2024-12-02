import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import styles from './NavBar.module.css';

function NavBar() {
  const navigate = useNavigate();

  const handleClickNavItem = (title) => {
    navigate(`/${title}`); /* 페이지 이동 */
  };

  return (
    <div className={styles.container}>
      <img src={Logo} className={styles.logo} onClick={() => handleClickNavItem('')} />
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
