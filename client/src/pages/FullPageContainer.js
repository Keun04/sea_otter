import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

import DaySection from './sections/DaySection';
import NightSection from './sections/NightSection';
import SunsetSection from './sections/SunsetSection';
import styles from './FullPageContainer.module.css';

gsap.registerPlugin(ScrollTrigger);

function FullPageContainer() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // 전체 문서 기준 진행도 계산
    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress; // 0 ~ 1

        let r, g, b;

        if (progress < 0.5) {
          // 낮 → 밤 (0~0.5)
          const p = progress / 0.5;
          r = Math.round(173 + (87 - 173) * p);
          g = Math.round(216 + (70 - 216) * p);
          b = Math.round(230 + (115 - 230) * p);
        } else {
          // 밤 → 노을 (0.5~1)
          const p = (progress - 0.5) / 0.5;
          r = Math.round(87 + (198 - 87) * p); // 조정된 노을 색상
          g = Math.round(70 + (124 - 70) * p);
          b = Math.round(115 + (104 - 115) * p);
        }

        container.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      },
    });

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
      <section className={`${styles.section} ${styles.sunset}`}>
        <SunsetSection />
      </section>
    </div>
  );
}

export default FullPageContainer;
