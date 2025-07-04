import styles from './Welcome.module.scss'

const Welcome = () => {
  return (
    <div className={styles.welcomeContainer}>
      <img src="/logos/gamma-yellow.png" alt="Gamma Logo"/>
      <h1>Welcome to Gamma</h1>
      <p>Optimizing <span>your</span> daily journey with a bold and <span>effective</span> approach to personal <span>management</span>.</p>
      <button>Get Started</button>
    </div>
  )
}

export default Welcome