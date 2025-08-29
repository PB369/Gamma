import styles from './css/DateDetailsBtn.module.scss'

type Props = {
  type: 'create' | 'save';
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DateDetailsBtn = ({ type, setIsEditMode }: Props) => {
  const handleSaveEvent = () => {

  }

  return (
    <>
      <button 
        className={styles.DDButton} 
        onClick={type === 'create' ? ()=>setIsEditMode(true) : handleSaveEvent}
      >
        {type === 'create' ? 'Schedule a new activity' : 'Save'}
      </button>
    </>
  )
}

export default DateDetailsBtn;