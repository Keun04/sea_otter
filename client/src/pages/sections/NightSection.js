import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import NavBar from '../../components/NavBar';
import RoomModal from '../../components/RoomModal';

import GyRoomNight from '../../assets/GyRoomNight.webp'; // 밤 방 이미지
import styles from './NightSection.module.css';

gsap.registerPlugin(ScrollTrigger);

function NightSection() {
  const containerRef = useRef(null);
  const [isRoomOpen, setIsRoomOpen] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    gsap.to(container, {
      opacity: 1,
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'top center',
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.background}>
      <button onClick={() => setIsRoomOpen(true)} className={styles.fakeTrigger}>
        프로젝트 보기
      </button>
      <RoomModal type="night" isOpen={isRoomOpen} onClose={() => setIsRoomOpen(false)}>
        <img src={GyRoomNight} className={styles.roomImg} />
      </RoomModal>
    </div>
  );
}

export default NightSection;
