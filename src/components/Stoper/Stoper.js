import styles from './Stoper.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';

const Stoper = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    miliseconds: 0
  });

  return(
    <>
      <div className={styles.stoper}>{time.hours < 10 ? '0' + time.hours : time.hours}:
        {time.minutes < 10 ? '0' + time.minutes : time.minutes}:
        {time.seconds < 10 ? '0' + time.seconds : time.seconds}.
        {time.miliseconds < 100 ? (time.miliseconds < 10 ? '00' + time.miliseconds : '0' + time.miliseconds) : time.miliseconds}</div>
      <section className={styles.buttonsSection}>
        <Button>Start</Button>
        <Button>Stop</Button>
        <Button>Reset</Button>
      </section>
    </>)};


export default Stoper;