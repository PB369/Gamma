import styles from './css/WidgetCard.module.scss'

type Props = {
  widgetName: string,
  iconName: string
}

const WidgetCard = ({widgetName, iconName}: Props) => {
  const chooseIconPath = (iconName: string) => {
    return `/widgetsIcons/${iconName}`
  }

  return (
    <div className={styles.widgetCardContainer}>
      <div className={styles.widgetInfoContainer}>
        <div className={styles.iconContainer}>
          <img src={chooseIconPath(iconName)} alt={`${iconName}`} />
        </div>
        <p>{widgetName}</p>
      </div>
      <img className={styles.addIcon} src="/whiteIcons/add-icon.png" alt="add-icon" />
    </div>
  )
}

export default WidgetCard