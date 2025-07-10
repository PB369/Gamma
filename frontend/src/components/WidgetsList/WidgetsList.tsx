import { widgetsCards } from '../../utils/widgetsCardsContent'
import WidgetCard from '../WidgetCard/WidgetCard'
import styles from './css/WidgetsList.module.scss'

const WidgetsList = () => {
  return (
    <div className={styles.widgetsListContainer}>
      <h2>List of Widgets</h2>
      <div className={styles.widgetsList}>
          {widgetsCards.map(card => (
            <WidgetCard widgetName={card.widgetName} iconName={card.iconName}/>
          ))}
      </div>
    </div>
  )
}

export default WidgetsList