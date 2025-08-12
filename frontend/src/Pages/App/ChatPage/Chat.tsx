import ChatsList from '../../../components/ChatsList/ChatsList'
import styles from './css/ChatPage.module.scss'

const ChatPage = () => {
  return (
    <div className={styles.chatPageContainer}>
      <ChatsList/>
      <div className={styles.chatContainer}>
        <div className={styles.chatContent}>
          <h2>How can I help you today, Thomas?</h2>
        </div>
        <span className={styles.chatInput}>
          <input placeholder='Ask a question...'/>
          <button>
            <img src="/otherIcons/send-icon.png" alt="send-icon" />
          </button>
        </span>
      </div>
    </div>
  )
}

export default ChatPage