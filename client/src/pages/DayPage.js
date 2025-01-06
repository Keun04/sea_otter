import NavBar from '../components/NavBar';
import styles from './DayPage.module.css';
import GyIsland from '../assets/GyIsland.webp';
import LIsland from '../assets/LIsland.webp';

function DayPage() {
  return (
    <div className={styles.background}>
      <NavBar />
      <img src={GyIsland} className={styles.gyIsland} />
      <img src={LIsland} className={styles.lIsland} />
    </div>
  );
}

export default DayPage;
