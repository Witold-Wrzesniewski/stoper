import styles from './Stoper.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';

const Stoper = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  });

  const newTime = (increment) => {
    let [milliseconds, seconds, minutes, hours] = [time.milliseconds, time.seconds, time.minutes, time.hours];

    milliseconds += increment;
    if (milliseconds > 999) {
      seconds += Math.floor(milliseconds / 1000);
      milliseconds = milliseconds % 1000;
    }
    if (seconds > 59) {
      minutes += Math.floor(seconds / 60);
      seconds = seconds & 60;
    }
    if (minutes > 59) {
      hours += Math.floor(minutes / 60);
      minutes = minutes % 60;
    }

    setTime({
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      milliseconds: milliseconds
    });
  };

  return(
    <>
      <div className={styles.stoper}>{time.hours < 10 ? '0' + time.hours : time.hours}:
        {time.minutes < 10 ? '0' + time.minutes : time.minutes}:
        {time.seconds < 10 ? '0' + time.seconds : time.seconds}.
        {time.milliseconds < 100 ? (time.milliseconds < 10 ? '00' + time.milliseconds : '0' + time.milliseconds) : time.milliseconds}</div>
      <section className={styles.buttonsSection}>
        <Button>Start</Button>
        <Button>Stop</Button>
        <Button>Reset</Button>
      </section>
    </>)
};


export default Stoper;