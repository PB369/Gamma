import useScreenWidth from '../../hooks/useScreenWidth'
import styles from './css/CreateNewChatBtn.module.scss'

const CreateNewChatBtn = () => {
  const screenWidth = useScreenWidth();

  return (
    <button className={`${styles.CreateNewChatBtnContainer} ${screenWidth < 768 && styles.mobileStyling}`}>
      <img className={styles.addIcon} src="/whiteIcons/add-icon.png" alt="add-icon" />
      <p>Create a new chat</p>
    </button>
  )
}

export default CreateNewChatBtn