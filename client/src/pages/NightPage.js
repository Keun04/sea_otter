import { useState } from 'react';
import styles from './NightPage.module.css';

import NavBar from '../components/NavBar';
import RoomModal from '../components/RoomModal';

import GyIsland from '../assets/GyIsland.webp';
import LIsland from '../assets/LIsland.webp';
import GyRoomNight from '../assets/GyRoomNight.webp';

function NightPage() {
  const [isGyRoomModalOpen, setIsGyRoomModalOpen] = useState(false);

  const handleGyIslandClick = () => {
    setIsGyRoomModalOpen(true);
  };

  return (
    <div className={styles.background}>
      <NavBar />
      <img src={GyIsland} className={styles.gyIsland} onClick={handleGyIslandClick} />
      <img src={LIsland} className={styles.lIsland} />

      <RoomModal type={'night'} isOpen={isGyRoomModalOpen} onClose={() => setIsGyRoomModalOpen(false)}>
        <img src={GyRoomNight} className={styles.roomImg} />
      </RoomModal>
    </div>
  );
}

export default NightPage;
