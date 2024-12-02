import NavBar from '../components/NavBar';
import styles from './DayPage.module.css';
import GyRoom from '../assets/GyRoom_NoWall.webp';

function DayPage() {
  return (
    <div className={styles.background}>
      <NavBar />
      <img src={GyRoom} className={styles.gyRoom} />
    </div>
  );
}

export default DayPage;
