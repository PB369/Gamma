import ChatsList from '../../../components/ChatsList/ChatsList'
import styles from './css/Chat.module.scss'

const Chat = () => {
  return (
    <div className={styles.chatPageContainer}>
      <ChatsList/>
    </div>
  )
}

export default Chat