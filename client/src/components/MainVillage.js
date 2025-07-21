import styles from './MainVillage.module.css';
import MainHome from '../assets/MainHome.webp';

function MainVillage() {
  return (
    <div className={styles.mainVillageContainer}>
      <img className={styles.mainVillageImg} src={MainHome} alt="섬" />
    </div>
  );
}

export default MainVillage;
