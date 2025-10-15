import styles from './Stoper.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';

const Stoper = () => {
  const time = new Date();
  const [startTime, setStartTime] = useState(time.getTime());
  const [currentTime, setCurrentTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  });
  /*const timer = setInterval(() => {
    newTime(time.getTime() - startTime);
  }, 1000);*/

  const newTime = (increment) => {
    let [milliseconds, seconds, minutes, hours] = [currentTime.milliseconds, currentTime.seconds, currentTime.minutes, currentTime.hours];

    milliseconds += increment;
    if (milliseconds > 999) {
      seconds += Math.floor(milliseconds / 1000);
      milliseconds = milliseconds % 1000;
    }
    if (seconds > 59) {
      minutes += Math.floor(seconds / 60);
      seconds = seconds % 60;
    }
    if (minutes > 59) {
      hours += Math.floor(minutes / 60);
      minutes = minutes % 60;
    }

    setCurrentTime({
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      milliseconds: milliseconds
    });
  };

  return(
    <>
      <div className={styles.stoper}>{currentTime.hours < 10 ? '0' + currentTime.hours : currentTime.hours}:
        {currentTime.minutes < 10 ? '0' + currentTime.minutes : currentTime.minutes}:
        {currentTime.seconds < 10 ? '0' + currentTime.seconds : currentTime.seconds}.
        {currentTime.milliseconds < 100 ? (currentTime.milliseconds < 10 ? '00' + currentTime.milliseconds : '0' + currentTime.milliseconds) : currentTime.milliseconds}</div>
        <div className={styles.stoper}>{time.getTime()}</div>
      <section className={styles.buttonsSection}>
        <Button action={() => newTime(1000)}>Start</Button>
        <Button>Stop</Button>
        <Button>Reset</Button>
      </section>
    </>)
};


export default Stoper;