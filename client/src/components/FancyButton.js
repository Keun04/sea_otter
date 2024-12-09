import { useState } from 'react';
import styles from './FancyButton.module.css';
import splitStringUsingRegex from '../utils/splitStringUsingRegex';

function FancyButton() {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const getTransformStyles = (isMouseEntered, index, direction = 'up') => ({
    transform: `translateY(${isMouseEntered ? (direction === 'up' ? '-100%' : '100%') : '0%'})`,
    transitionDelay: `${index * 0.02}s`,
  });

  const playChar = splitStringUsingRegex('놀이터');
  const DayChar = splitStringUsingRegex('낮');
  const PortChar = splitStringUsingRegex('포트폴리오');
  const NightChar = splitStringUsingRegex('밤');
  const maxLength = 5;

  return (
    <>
      <button
        className={styles.fancyBtn}
        onMouseEnter={() => setIsMouseEntered(true)}
        onMouseLeave={() => setIsMouseEntered(false)}
      >
        <span className={styles.textContainer} style={{ width: `${maxLength}em` }}>
          {playChar.map((character, index) => (
            <span className={styles.charContainer} key={index}>
              <span style={getTransformStyles(isMouseEntered, index, 'up')}>{character || ''}</span>
              <span style={getTransformStyles(isMouseEntered, index, 'up')}>{DayChar[index] || ''}</span>
            </span>
          ))}
        </span>
      </button>
      <button
        className={styles.fancyBtn}
        onMouseEnter={() => setIsMouseEntered(true)}
        onMouseLeave={() => setIsMouseEntered(false)}
      >
        <span className={styles.textContainer} style={{ width: `${maxLength}em` }}>
          {PortChar.map((character, index) => (
            <span className={styles.charContainer} key={index}>
              <span style={getTransformStyles(isMouseEntered, index, 'up')}>{character || ''}</span>
              <span style={getTransformStyles(isMouseEntered, index, 'up')}>{NightChar[index] || ''}</span>
            </span>
          ))}
        </span>
      </button>
    </>
  );
}

export default FancyButton;
