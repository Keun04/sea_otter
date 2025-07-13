import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import DaySection from './sections/DaySection';
import NightSection from './sections/NightSection';
// import SunsetSection from './sections/SunsetSection';
import styles from './FullPageContainer.module.css';

gsap.registerPlugin(ScrollTrigger);

function FullPageContainer() {
  const containerRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.refresh(); // 섹션 인식 정확도를 위해
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <section className={`${styles.section} ${styles.day}`}>
        <DaySection />
      </section>
      <section className={`${styles.section} ${styles.night}`}>
        <NightSection />
      </section>
      <section className={`${styles.section} ${styles.sunset}`}>{/* <SunsetSection /> */}</section>
    </div>
  );
}

export default FullPageContainer;
