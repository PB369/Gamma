import styles from './css/ElementOptions.module.scss'

type Props = {
  elementType: 'chatCard';
}

const ElementOptions = ({elementType}: Props) => {

  return (
    <div className={styles.elementOptionsContainer}>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

export default ElementOptions