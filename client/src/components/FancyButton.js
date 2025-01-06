import { useState } from 'react';
import styles from './FancyButton.module.css';
import splitStringUsingRegex from '../utils/splitStringUsingRegex';
import { useNavigate } from 'react-router-dom';

function FancyButton() {
  const [isMousePlayEntered, setIsMousePlayEntered] = useState(false);
  const [isMousePortEntered, setIsMousePortEntered] = useState(false);
  const [isMouseSunsetEntered, setIsMouseSunsetEntered] = useState(false);

  const navigate = useNavigate();

  const getTransformStyles = (isMouseEntered, index, direction = 'up') => ({
    transform: `translateY(${isMouseEntered ? (direction === 'up' ? '-100%' : '100%') : '0%'})`,
    transitionDelay: `${index * 0.02}s`,
  });

  const playChar = splitStringUsingRegex('Play');
  const dayChar = splitStringUsingRegex('  낮');
  const portChar = splitStringUsingRegex('Portfolio');
  const nightChar = splitStringUsingRegex('    밤    ');
  const usChar = splitStringUsingRegex('About us');
  const sunSet = splitStringUsingRegex('   노 을   ');

  return (
    <>
      <button
        className={styles.fancyBtn}
        onMouseEnter={() => setIsMousePlayEntered(true)}
        onMouseLeave={() => setIsMousePlayEntered(false)}
        onClick={() => navigate('/')}
      >
        <span className={styles.textContainer}>
          {playChar.map((character, index) => (
            <span className={styles.charContainer} key={index}>
              <span style={getTransformStyles(isMousePlayEntered, index, 'up')}>{character}</span>
              <span style={getTransformStyles(isMousePlayEntered, index, 'up')}>{dayChar[index]}</span>
            </span>
          ))}
        </span>
      </button>
      <button
        className={styles.fancyBtn}
        onMouseEnter={() => setIsMousePortEntered(true)}
        onMouseLeave={() => setIsMousePortEntered(false)}
        onClick={() => navigate('/night')}
      >
        <span className={styles.textContainer}>
          {portChar.map((character, index) => (
            <span className={styles.charContainer} key={index}>
              <span style={getTransformStyles(isMousePortEntered, index, 'up')}>{character || ' '}</span>
              <span style={getTransformStyles(isMousePortEntered, index, 'up')}>{nightChar[index] || ''}</span>
            </span>
          ))}
        </span>
      </button>
      <button
        className={styles.fancyBtn}
        onMouseEnter={() => setIsMouseSunsetEntered(true)}
        onMouseLeave={() => setIsMouseSunsetEntered(false)}
      >
        <span className={styles.textContainer}>
          {usChar.map((character, index) => (
            <span className={styles.charContainer} key={index}>
              <span style={getTransformStyles(isMouseSunsetEntered, index, 'up')}>{character || ' '}</span>
              <span style={getTransformStyles(isMouseSunsetEntered, index, 'up')}>{sunSet[index] || ''}</span>
            </span>
          ))}
        </span>
      </button>
    </>
  );
}

export default FancyButton;
