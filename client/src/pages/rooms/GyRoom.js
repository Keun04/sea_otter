import styles from './GyRoom.module.css';
import GyRoomDay from '../../assets/GyDayRoom.webp';

function GyRoom() {
  return (
    <div className={styles.roomContainer}>
      <img className={`${styles.gyRoomImg}`} src={GyRoomDay} alt="가영 방" />
    </div>
  );
}

export default GyRoom;
