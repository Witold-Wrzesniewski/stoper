import styles from './Stoper.module.scss';
import Button from '../Button/Button';
import Display from '../Display/Display';
import { useState, useEffect } from 'react';

const Stoper = () => {
  const [startTime, setStartTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    return () => {
      if(timer) clearInterval(timer);
    };
  }, []);

  let stopTime = startTime;

  const handleStart = () => {
    setStartTime(prevTime => prevTime + new Date().getTime() - stopTime)
    setTimer(setInterval(() => setCurrentTime(new Date().getTime()), 1000));
  };

  const handleStop = () => {
    if(timer) {
      stopTime = new Date().getTime();
      clearInterval(timer);
      //setTimer(null);
    }
  };

  const handleReset = () => {
    setStartTime(0);
    setCurrentTime(0);
    clearInterval(timer);
    setTimer(null);
  }

  return(
    <>
      <Display time={currentTime - startTime} />
      <section className={styles.buttonsSection}>
        <Button action={handleStart}>Start</Button>
        <Button action={handleStop}>Stop</Button>
        <Button action={handleReset}>Reset</Button>
      </section>
    </>)
};


export default Stoper;