import ChatCard from '../ChatCard/ChatCard'
import CreateNewChatBtn from '../CreateNewChatBtn/CreateNewChatBtn'
import styles from './css/ChatsList.module.scss'
import { motion } from 'motion/react'

const ChatsList = () => {
  return (
    <motion.div 
      className={styles.chatsListContainer}
      initial={{ x: -325, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
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
    </motion.div>
  )
}

export default ChatsList