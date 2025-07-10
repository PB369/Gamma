import styles from './css/ChatCard.module.scss'

const ChatCard = () => {
  return (
    <button className={styles.chatCardContainer}>
      <p>Name of the chat</p>
    </button>
  )
}

export default ChatCard