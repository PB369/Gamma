import { widgetsCards } from '../../utils/widgetsCardsContent'
import WidgetCard from '../WidgetCard/WidgetCard'
import styles from './css/WidgetsList.module.scss'
import { motion } from 'motion/react'

const WidgetsList = () => {
  return (
    <motion.div 
      className={styles.widgetsListContainer}
      initial={{ x: -325, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <h2>List of Widgets</h2>
      <div className={styles.widgetsList}>
          {widgetsCards.map(card => (
            <WidgetCard widgetName={card.widgetName} iconName={card.iconName}/>
          ))}
      </div>
    </motion.div>
  )
}

export default WidgetsList