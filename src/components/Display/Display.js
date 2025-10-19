import styles from './Display.module.scss';

const Display = (props) => {
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
  const time = props.time;

  return(
    <div className={styles.display}>{formatedTime(time).hours < 10 ? '0' + formatedTime(time).hours : formatedTime(time).hours}:
          {formatedTime(time).minutes < 10 ? '0' + formatedTime(time).minutes : formatedTime(time).minutes}:
          {formatedTime(time).seconds < 10 ? '0' + formatedTime(time).seconds : formatedTime(time).seconds}.
          {formatedTime(time).milliseconds < 100 ? (formatedTime(time).milliseconds < 10 ? '00' + formatedTime(time).milliseconds : '0' + formatedTime(time).milliseconds) : formatedTime(time).milliseconds}
    </div>)};

export default Display;