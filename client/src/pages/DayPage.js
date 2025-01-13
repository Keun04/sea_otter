import { useEffect, useRef, useState } from 'react';
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
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // GSAP 애니메이션 설정
    gsap.to(container, {
      backgroundImage: 'linear-gradient(0, #745c97, #39375b)', // 변경할 색상
      scrollTrigger: {
        trigger: container,
        start: 'top top', // 시작 지점
        end: 'bottom bottom', // 끝나는 지점
        scrub: 1, // 스크롤에 따라 부드럽게 애니메이션
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleGyIslandClick = () => {
    setIsGyRoomModalOpen(true);
  };

  return (
    <div ref={containerRef} className={styles.background}>
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
