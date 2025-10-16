import styles from './Stoper.module.scss';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';

const Stoper = () => {
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  //const [timer, setTimer] = useState(setInterval(() => setCurrentTime(new Date().getTime()), 1000));
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setTimer(setInterval(() => setCurrentTime(new Date().getTime()), 1000));
    return () => {
      if(timer) clearInterval(timer);
    };
  }, []);
  const time = currentTime - startTime;

  const formatedTime = (time) => {
    let milliseconds = time, seconds = 0, minutes = 0, hours = 0;

    if (milliseconds > 999) {
      seconds = Math.floor(milliseconds / 1000);
      milliseconds = milliseconds % 1000;
    }
    if (seconds > 59) {
      minutes = Math.floor(seconds / 60);
      seconds = seconds % 60;
    }
    if (minutes > 59) {
      hours = Math.floor(minutes / 60);
      minutes = minutes % 60;
    }

    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      milliseconds: milliseconds
    };
  };

  return(
    <>
      <div className={styles.stoper}>{formatedTime(time).hours < 10 ? '0' + formatedTime(time).hours : formatedTime(time).hours}:
        {formatedTime(time).minutes < 10 ? '0' + formatedTime(time).minutes : formatedTime(time).minutes}:
        {formatedTime(time).seconds < 10 ? '0' + formatedTime(time).seconds : formatedTime(time).seconds}.
        {formatedTime(time).milliseconds < 100 ? (formatedTime(time).milliseconds < 10 ? '00' + formatedTime(time).milliseconds : '0' + formatedTime(time).milliseconds) : formatedTime(time).milliseconds}</div>
      <section className={styles.buttonsSection}>
        <Button>Start</Button>
        <Button>Stop</Button>
        <Button>Reset</Button>
      </section>
    </>)
};


export default Stoper;