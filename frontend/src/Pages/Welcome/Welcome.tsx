import { useState } from 'react';
import styles from './css/Welcome.module.scss';
import { AnimatePresence, motion } from "motion/react"
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const animatedFadeUp = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: (delay = 0.25, duration = 0.8) => ({delay, duration})
  }

  const animatedFadeOut = {
    exit: { opacity: 0 },
    animate: { opacity: 1 },
    transition: (delay = 0.25, duration = 0.8) => ({delay, duration})
  }
  const [isExiting , setIsExiting] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setIsExiting(true);
    setTimeout(()=>navigate('/authentication'), 1500);
  }

  return (
    <div className={styles.welcomePageContainer}>
      <AnimatePresence>
        {
          isExiting ? null :
            <motion.div className={styles.welcomeContentContainer} {...animatedFadeOut} transition={animatedFadeOut.transition(0.25, 1.5)}>
              <motion.img src="/logos/gamma-yellow.png" alt="Gamma Logo" draggable={false} {...animatedFadeUp} transition={animatedFadeUp.transition(0.25, 1.5)}/>
              <motion.h1  {...animatedFadeUp} transition={animatedFadeUp.transition(0.5, 1.5)}>Welcome to Gamma</motion.h1>
              <motion.p {...animatedFadeUp} transition={animatedFadeUp.transition(0.75, 1.5)}>
                Optimizing <span>your</span> daily journey with a bold and <span>effective</span> approach to personal <span>management.</span>
              </motion.p>
              <motion.button {...animatedFadeUp} transition={animatedFadeUp.transition(1, 1.5)} onClick={handleGetStarted}>Get Started</motion.button>
            </motion.div>
        }
      </AnimatePresence>
    </div>
  );
};

export default Welcome;
