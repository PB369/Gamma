import ChatsList from '../../../components/ChatsList/ChatsList'
import styles from './css/Chat.module.scss'

const Chat = () => {
  return (
    <div className={styles.chatPageContainer}>
      <ChatsList/>
      <div className={styles.chatContainer}>
        <h2>How can I help you today, Thomas?</h2>
        <span>
          <input placeholder='Ask a question...'/>
          <button>
            <img src="/otherIcons/send-icon.png" alt="send-icon" />
          </button>
        </span>
      </div>
    </div>
  )
}

export default Chat