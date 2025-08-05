import ChatCard from '../ChatCard/ChatCard'
import CreateNewChatBtn from '../CreateNewChatBtn/CreateNewChatBtn'
import styles from './css/ChatsList.module.scss'
import { motion } from 'motion/react'

const ChatsList = () => {
  return (
    <div className={styles.chatsListContainer}>
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
    </div>
  )
}

export default ChatsList