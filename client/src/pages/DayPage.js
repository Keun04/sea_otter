import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import NavBar from '../components/NavBar';
import styles from './DayPage.module.css';
import RoomModal from '../components/RoomModal';

import GyIsland from '../assets/GyIsland.webp';
import LIsland from '../assets/LIsland.webp';
import GyRoomDay from '../assets/GyRoomDay.webp';

gsap.registerPlugin(ScrollTrigger);

function DayPage() {
  const [isGyRoomModalOpen, setIsGyRoomModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    ScrollTrigger.create({
      trigger: document.body,
      start: 'center center',
      end: 'bottom bottom',
      markers: true,
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

      <RoomModal type={'day'} isOpen={isGyRoomModalOpen} onClose={() => setIsGyRoomModalOpen(false)}>
        <img src={GyRoomDay} className={styles.roomImg} />
      </RoomModal>
    </div>
  );
}

export default DayPage;
