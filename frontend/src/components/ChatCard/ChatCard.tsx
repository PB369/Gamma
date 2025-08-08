import { useState } from 'react'
import styles from './css/ChatCard.module.scss'
import ElementOptions from '../ElementOptions/ElementOptions';

const ChatCard = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [showChatOptions, setShowChatOptions] = useState<boolean>(false);

  return (
    <button className={styles.chatCardContainer} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <p>Name of the chat Name of the chat</p>
      {isHovered && (
        <div className={styles.chatOptionsContainer}>
          <button onClick={() => setShowChatOptions(prev => !prev)}>
            <div className={styles.ellipsisOfOptions}></div>
            <div className={styles.ellipsisOfOptions}></div>
            <div className={styles.ellipsisOfOptions}></div>
          </button>
          {showChatOptions && <ElementOptions elementType={'chatCard'}/>}
        </div>
      )}
    </button>
  )
}

export default ChatCard