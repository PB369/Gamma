import { useState, type Dispatch } from 'react';
import { privacyPolicyText, termsAndConditionsText } from '../../utils/termsAndPolicyText';
import { AnimatePresence, motion } from 'motion/react'
import styles from './css/TermsAndPolicyModal.module.scss'

type Props = {
  typeOfModal: 'termsAndConditions' | 'privacyPolicy';
  setShowTermsAndPolicyModal: Dispatch<React.SetStateAction<boolean>>;
}

const TermsAndPolicyModal = ({ typeOfModal, setShowTermsAndPolicyModal }: Props) => {

  const [isExiting , setIsExiting] = useState<boolean>(false);

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

  const handleCloseModal = () => {
    setIsExiting(true);
    setTimeout(()=>setShowTermsAndPolicyModal(false), 800);
  }

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div className={styles.termsAndPolicyModal} {...animatedFadeUp} {...animatedFadeOut} transition={animatedFadeUp.transition(0.1, 0.8)}>
          <button onClick={handleCloseModal}>X</button>
          <h3>{typeOfModal === 'termsAndConditions' ? 'Terms and Conditions' : 'Privacy Policy'}</h3>
          <div className={styles.modalText}>
            {(
              typeOfModal === 'termsAndConditions' ? termsAndConditionsText : privacyPolicyText
              ).split('-@@-').map((paragraph, index) => <><p key={index}>{paragraph}</p><br/></>)
            }
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
};

export default TermsAndPolicyModal;
