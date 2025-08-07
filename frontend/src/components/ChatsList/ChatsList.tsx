import { useState } from 'react'
import useScreenWidth from '../../hooks/useScreenWidth'
import ChatCard from '../ChatCard/ChatCard'
import CreateNewChatBtn from '../CreateNewChatBtn/CreateNewChatBtn'
import styles from './css/ChatsList.module.scss'
import { motion } from 'motion/react'

const ChatsList = () => {
  const screenWidth = useScreenWidth();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleExpandBtn = () => {
    setIsExpanded(prev => !prev);
  }

  const animatedFadeUp = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: (delay = 0.25, duration = 0.8) => ({delay, duration})
  }

  return (
    <>
      {
        screenWidth < 768 ? 
          <motion.div 
            className={`${styles.mobileChatsAccordionContainer} 
            ${isExpanded && styles.expanded}`}
            animate={{ height: isExpanded ? '70vh' : '0' }}
            transition={{ duration: 0.8 }}
          >
            {
              isExpanded && (
                <motion.div 
                  className={styles.accordionContent}
                  {...animatedFadeUp}
                  transition={animatedFadeUp.transition()}
                >
                  <div className={styles.mobileChatsListContainer}>
                    <h2>Gaia Chats</h2>
                    <CreateNewChatBtn/>
                      <p className={styles.yourChatsTitle}>Your chats</p>
                      <div className={styles.chatsList}>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                      </div>
                    </div>
                </motion.div>
              )
            }
            <motion.button 
              className={`${styles.expandBtn} ${isExpanded && styles.expanded}`} 
              onClick={handleExpandBtn}
              animate={{ top: isExpanded ? `${window.innerHeight * 0.7 - 20}px` : '-20px' }}
              transition={{ duration: 0.8 }}
            >
              <img src="/whiteIcons/arrowHeadToRight-icon.png" alt="arrowHeadToRight-icon" />
            </motion.button>
          </motion.div>
          :
          <motion.div className={styles.desktopChatsAccordionContainer}>
            <div className={`${styles.desktopChatsListContainer} ${isExpanded && styles.expanded}`}>
              {isExpanded && (
                <>
                  <h2>Gaia Chats</h2>
                  <CreateNewChatBtn/>
                  <div className={styles.yourChatsContainer}>
                    <p className={styles.yourChatsTitle}>Your chats</p>
                    <div className={styles.chatsList}>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                        <ChatCard/>
                    </div>
                  </div>
                </>
              )}
            </div>
            <motion.button
              className={`${styles.expandBtn} ${isExpanded && styles.expanded}`}
              onClick={handleExpandBtn}
              animate={{ top: isExpanded ? `${window.innerHeight * 0.7 - 20}px` : '-20px' }}
              transition={{ duration: 0.8 }}
            >
              <img src="/whiteIcons/arrowHeadToRight-icon.png" alt="arrowHeadToRight-icon" />
            </motion.button>
          </motion.div>
      }
    </>
  )
}

export default ChatsList