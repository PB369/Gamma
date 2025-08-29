import { motion } from 'motion/react';
import styles from './css/ConfirmModal.module.scss'

type Props = {
  actionType: 'signOut' | 'deleteChat' | 'deleteAccount' | 'deleteEvent';
  onConfirmAction: ()=>void;
  onCancelAction: ()=>void;
}

const ConfirmModal = ({actionType, onConfirmAction, onCancelAction}: Props) => {

  const getMessage = () => {
    switch(actionType) {
      case 'signOut': return 'Are you sure you want to sign out?'
      case 'deleteChat': return 'Are you sure you want to delete this chat?'
      case 'deleteAccount': return 'Are you sure you want to delete your account?'
      case 'deleteEvent': return 'Are you sure you want to delete this activity?'
    }
  }

  return (
    <>
      <motion.div
        className={styles.confirmModalBackdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onCancelAction}
      />
      <motion.div 
        className={styles.confirmModalContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className={styles.modalTitle}>Attention</p>
        <p className={styles.modalMessage}>This action cannot be undone. {getMessage()}</p>
        <div className={styles.actionsBtnContainer}>
          <button onClick={onCancelAction} className={styles.cancelBtn}>Cancel</button>
          <button onClick={onConfirmAction} className={styles.confirmBtn}>Confirm</button>
        </div>
      </motion.div>
    </>
  )
}

export default ConfirmModal;