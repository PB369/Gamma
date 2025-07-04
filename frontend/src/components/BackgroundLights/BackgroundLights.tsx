import styles from './css/BackgroundLights.module.scss'

const BackgroundLights = () => {
  return (
    <div className={styles.backgroundLights}>
        <div className={`${styles.blob} ${styles.yellow} ${styles.moveDiagonal}`} style={{ animationDuration: '10s' }}/>
        <div className={`${styles.blob} ${styles.white} ${styles.moveReverseDiagonal}`} style={{ animationDuration: '10s' }}/>
        <div className={`${styles.blob} ${styles.yellow} ${styles.moveHorizontal}`} style={{ animationDuration: '10s' }}/>
        <div className={`${styles.blob} ${styles.white} ${styles.moveVertical}`} style={{ animationDuration: '10s' }}/>
        <div className={`${styles.blob} ${styles.yellow} ${styles.moveReverseDiagonal} ${styles.moveHorizontal}`} style={{ animationDuration: '10s', translate: '65vw -50vh' }}/>
    </div>
  )
}

export default BackgroundLights;