import styles from './Stoper.module.scss';
import Button from '../Button/Button';
import Display from '../Display/Display';
import { useState, useEffect } from 'react';

const Stoper = () => {
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setTimer(setInterval(() => setCurrentTime(new Date().getTime()), 1000));
    return () => {
      if(timer) clearInterval(timer);
    };
  }, []);

  return(
    <>
      <Display time={currentTime - startTime} />
      <section className={styles.buttonsSection}>
        <Button>Start</Button>
        <Button>Stop</Button>
        <Button>Reset</Button>
      </section>
    </>)
};


export default Stoper;