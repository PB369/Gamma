import BackgroundLights from '../../components/BackgroundLights/BackgroundLights';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import styles from './css/Welcome.module.scss';
import { motion } from "motion/react"

const Welcome = () => {
  const animatedFadeUp = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: (delay = 0.25, duration = 0.8) => ({delay, duration})
  }

  return (
    <div className={styles.welcomePageContainer}>
      {/* <div className={styles.welcomeContentContainer}>
        <motion.img src="/logos/gamma-yellow.png" alt="Gamma Logo" draggable={false} {...animatedFadeUp} transition={animatedFadeUp.transition(0.25, 1.5)}/>
        <motion.h1  {...animatedFadeUp} transition={animatedFadeUp.transition(0.5, 1.5)}>Welcome to Gamma</motion.h1>
        <motion.p {...animatedFadeUp} transition={animatedFadeUp.transition(0.75, 1.5)}>
          Optimizing <span>your</span> daily journey with a bold and <span>effective</span> approach to personal <span>management.</span>
        </motion.p>
        <motion.button {...animatedFadeUp} transition={animatedFadeUp.transition(1, 1.5)}>Get Started</motion.button>
      </div> */}
      
      <SignUpForm/>
      
      <BackgroundLights/>
      
      
    </div>
  );
};

export default Welcome;
