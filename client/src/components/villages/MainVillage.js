import styles from './MainVillage.module.css';
import MainHome from '../../assets/MainHome.webp';
import VillageDay from '../../assets/VillageDay.webp';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainVillage() {
  const [isEntering, setIsEntering] = useState(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    setIsEntering(true);

    // 애니메이션 시간 (예: 1.5초 후 페이지 이동)
    setTimeout(() => {
      navigate('/gydayroom'); // 이동할 페이지 경로
    }, 1500);
  };

  return (
    <div className={styles.mainVillageContainer}>
      {/* <img
        className={`${styles.mainVillageImg} ${isEntering ? styles.entering : ''}`}
        src={MainHome}
        alt="섬"
        onClick={handleEnter}
      /> */}
      <img
        className={`${styles.mainVillageImg} ${isEntering ? styles.entering : ''}`}
        src={VillageDay}
        alt="섬"
        onClick={handleEnter}
      />
    </div>
  );
}

export default MainVillage;
