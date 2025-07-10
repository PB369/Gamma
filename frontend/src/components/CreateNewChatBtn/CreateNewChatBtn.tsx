import styles from './css/CreateNewChatBtn.module.scss'

const CreateNewChatBtn = () => {
  return (
    <button className={styles.CreateNewChatBtnContainer}>
      <img className={styles.addIcon} src="/whiteIcons/add-icon.png" alt="add-icon" />
      <p>Create a new chat</p>
    </button>
  )
}

export default CreateNewChatBtn