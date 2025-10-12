import styles from './Stoper.module.scss';
import Button from '../Button/Button';

const Stoper = () => {
  return(
    <>
      <div className={styles.stoper}>00:00:00.000</div>
      <section className={styles.buttonsSection}>
        <Button>Start</Button>
        <Button>Stop</Button>
        <Button>Reset</Button>
      </section>
    </>)};


export default Stoper;