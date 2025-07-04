import styles from './css/Welcome.module.scss';

const Welcome = () => {
  return (
    <div className={styles.welcomePageContainer}>
      <div className={styles.welcomeContentContainer}>
        <img src="/logos/gamma-yellow.png" alt="Gamma Logo" draggable={false}/>
        <h1>Welcome to Gamma</h1>
        <p>
          Optimizing <span>your</span> daily journey with a bold and <span>effective</span> approach to personal <span>management.</span>
        </p>
        <button>Get Started</button>
      </div>

      <div className={styles.backgroundLights}>
        <div className={`${styles.blob} ${styles.yellow} ${styles.moveDiagonal}`} style={{ animationDuration: '10s' }}/>
        <div className={`${styles.blob} ${styles.white} ${styles.moveReverseDiagonal}`} style={{ animationDuration: '10s' }}/>
        <div className={`${styles.blob} ${styles.yellow} ${styles.moveHorizontal}`} style={{ animationDuration: '10s' }}/>
        <div className={`${styles.blob} ${styles.white} ${styles.moveVertical}`} style={{ animationDuration: '10s' }}/>
        <div className={`${styles.blob} ${styles.yellow} ${styles.moveReverseDiagonal} ${styles.moveHorizontal}`} style={{ animationDuration: '10s', translate: '65vw -50vh' }}/>
      </div>
    </div>
  );
};

export default Welcome;
