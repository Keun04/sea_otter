import styles from './GyRoom.module.css';
import GyDrama from '../../assets/GyDrama.webp';

function GyRoom() {
  return (
    <div className={styles.roomContainer}>
      <img className={`${styles.gyDramaImg}`} src={GyDrama} alt="가영 방 티비" />
    </div>
  );
}

export default GyRoom;
