import { useEffect, useRef, useState } from 'react'
import styles from './css/ChatCard.module.scss'
import ElementOptions from '../ElementOptions/ElementOptions';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import useScreenWidth from '../../hooks/useScreenWidth';

const ChatCard = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [showChatOptions, setShowChatOptions] = useState<boolean>(false);
  const [editOption, setEditOption] = useState(false);
  const [deleteOption, setDeleteOption] = useState(false);
  const [cursorPosition, setCursorPosition] = useState([0, 0]);
  const [chatName, setChatName] = useState("Name of the chat Name of the chat");
  const chatNameInputRef = useRef<HTMLInputElement>(null);
  const screenWidth = useScreenWidth();

  const handleDeleteChat = () => {
    setDeleteOption(false)
  }

  const handleChatOptionsBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCursorPosition([e.clientX, e.clientY]);
    setShowChatOptions(prev => !prev);
  }

  const handleFinishChatEdition = (e?: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => {
    if('key' in e!){
      if(e.key !== 'Enter') return
    }
    setEditOption(false);
  }

  useEffect(() => {
    if (editOption) {
      setShowChatOptions(false)
      chatNameInputRef.current?.focus();
      chatNameInputRef.current?.select();
    }
  }, [editOption]);

  return (
    <>
      <button className={`${styles.chatCardContainer} ${screenWidth < 768 && styles.mobileStyling}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {editOption ? 
          <input 
            ref={chatNameInputRef} 
            value={chatName} 
            onChange={e=>setChatName(e.target.value)}
            onBlur={handleFinishChatEdition}
            onKeyDown={handleFinishChatEdition}
          />
          :
          <span>{chatName}</span>
        }
        {isHovered && !editOption && (
          <div className={styles.chatOptionsContainer}>
            <button onClick={e=>handleChatOptionsBtn(e)}>
              <div className={styles.ellipsisOfOptions}></div>
              <div className={styles.ellipsisOfOptions}></div>
              <div className={styles.ellipsisOfOptions}></div>
            </button>
          </div>
        )}
      </button>
      {showChatOptions && 
        <ElementOptions 
          elementType={'chatCard'} 
          setEditOption={setEditOption} 
          setDeleteOption={setDeleteOption} 
          cursorPosition={cursorPosition}
          onClose={()=>setShowChatOptions(false)}
        />
      }
      {deleteOption && <ConfirmModal actionType='deleteChat' onCancelAction={()=>setDeleteOption(false)} onConfirmAction={handleDeleteChat}/>}
    </>
  )
}

export default ChatCard