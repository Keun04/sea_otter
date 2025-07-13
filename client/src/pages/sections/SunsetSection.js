import styles from './SunsetSection.module.css';
import NavBar from '../../components/NavBar';
import { motion } from 'framer-motion';

function SunsetSection() {
  return (
    <div className={styles.background}>
      <NavBar />
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1>🌇 노을 페이지</h1>
        <p>이곳은 About Us 섹션입니다.</p>
        <p>책 넘기기, 캐릭터 상호작용 등이 들어갈 예정이에요.</p>
      </motion.div>
    </div>
  );
}

export default SunsetSection;
