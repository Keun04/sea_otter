import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import RoomModal from '../../components/RoomModal';

import GyIsland from '../../assets/GyIsland.webp';
import LIsland from '../../assets/LIsland.webp';
import GyRoomDay from '../../assets/GyRoomDay.webp';
// import MainHome from '../../assets/MainHome.webp';

import styles from './DaySection.module.css';

gsap.registerPlugin(ScrollTrigger);

function DaySection() {
  const [isGyRoomModalOpen, setIsGyRoomModalOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    gsap.to(container, {
      backgroundImage: 'linear-gradient(to bottom, #39375b 50%, #745c97 100%)',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleGyIslandClick = () => {
    setIsGyRoomModalOpen(true);
  };

  return (
    <div ref={containerRef} className={styles.background}>
      {/* <img src={GyIsland} className={styles.gyIsland} onClick={handleGyIslandClick} />
      <img src={LIsland} className={styles.lIsland} /> */}
      {/* <img src={MainHome} className={styles.MainRoom} /> */}

      <RoomModal type={'day'} isOpen={isGyRoomModalOpen} onClose={() => setIsGyRoomModalOpen(false)}>
        <img src={GyRoomDay} className={styles.roomImg} />
      </RoomModal>
    </div>
  );
}

export default DaySection;
