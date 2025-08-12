import { AnimatePresence, motion } from 'motion/react'
import styles from './css/NotFoundPage.module.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const NotFoundPage = () => {
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

  const handleGoBack = () => {
    setIsExiting(true);
    setTimeout(()=>navigate(-1), 1500);
  }

  return (
    <div className={styles.notFoundPageContainer}>
      <AnimatePresence>
        {!isExiting && (
          <>
            <motion.div className={styles.top} {...animatedFadeOut} transition={animatedFadeOut.transition(0.25, 1.5)}>
              <motion.img
                src="/logos/gamma-yellow.png"
                alt="Gamma Logo"
                draggable={false}
                {...animatedFadeUp}
                transition={animatedFadeUp.transition(0.25, 1.5)}
                className={styles.gammaLogo}
              />
            </motion.div>
            <motion.div
              className={styles.middle}
              {...animatedFadeOut}
              transition={animatedFadeOut.transition(0.25, 1.5)}
            >
              <motion.div
                className={styles.errorContainer}
                {...animatedFadeUp}
                transition={animatedFadeUp.transition(0.5, 1.5)}
              >
                <div className={styles.errorMessageContainer}>
                  <h1>404</h1>
                  <p>Page Not Found</p>
                </div>
                <motion.button
                  {...animatedFadeUp}
                  transition={animatedFadeUp.transition(1, 1.5)}
                  onClick={handleGoBack}
                >
                  <img src="/whiteIcons/leftArrow-icon.png" />
                  <p>Go back</p>
                </motion.button>
              </motion.div>
            </motion.div>
            <div className={styles.bottom} />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NotFoundPage