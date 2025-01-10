import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import NavBar from '../components/NavBar';
import styles from './DayPage.module.css';
import RoomModal from '../components/RoomModal';

import GyIsland from '../assets/GyIsland.webp';
import LIsland from '../assets/LIsland.webp';
import GyRoomDay from '../assets/dayGY.png';

gsap.registerPlugin(ScrollTrigger);

function DayPage() {
  const [isGyRoomModalOpen, setIsGyRoomModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top 80%',
      onEnter: () => {
        navigate('/night');
      },
    });
  }, [navigate]);

  const handleGyIslandClick = () => {
    setIsGyRoomModalOpen(true);
  };

  return (
    <div className={styles.background}>
      <NavBar />
      <img src={GyIsland} className={styles.gyIsland} onClick={handleGyIslandClick} />
      <img src={LIsland} className={styles.lIsland} />

      <RoomModal isOpen={isGyRoomModalOpen} onClose={() => setIsGyRoomModalOpen(false)}>
        <img src={GyRoomDay} className={styles.roomImg} />
      </RoomModal>
    </div>
  );
}

export default DayPage;
