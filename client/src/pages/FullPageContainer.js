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
    const night = document.querySelector(`.${styles.night}`);
    const sunset = document.querySelector(`.${styles.sunset}`);

    // 낮 → 밤 전환
    ScrollTrigger.create({
      trigger: night,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const r1 = Math.round(128 + (57 - 128) * progress);
        const g1 = Math.round(179 + (55 - 179) * progress);
        const b1 = Math.round(255 + (91 - 255) * progress);
        const r2 = Math.round(152 + (87 - 152) * progress);
        const g2 = Math.round(228 + (55 - 228) * progress);
        const b2 = Math.round(255 + (91 - 255) * progress);

        container.style.backgroundImage = `linear-gradient(to bottom, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}))`;
      },
    });

    // 밤 → 노을 전환
    ScrollTrigger.create({
      trigger: sunset,
      start: 'top bottom',
      end: 'top center',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const r1 = Math.round(116 + (255 - 116) * progress);
        const g1 = Math.round(92 + (94 - 92) * progress);
        const b1 = Math.round(151 + (98 - 151) * progress);
        const r2 = Math.round(57 + (255 - 57) * progress);
        const g2 = Math.round(55 + (153 - 55) * progress);
        const b2 = Math.round(91 + (102 - 91) * progress);

        container.style.backgroundImage = `linear-gradient(to bottom, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}))`;
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
