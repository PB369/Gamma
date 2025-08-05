import { useState } from 'react'
import useScreenWidth from '../../hooks/useScreenWidth'
import { widgetsCards } from '../../utils/widgetsCardsContent'
import WidgetCard from '../WidgetCard/WidgetCard'
import styles from './css/WidgetsList.module.scss'
import { motion } from 'motion/react'

const WidgetsList = () => {
  const screenWidth = useScreenWidth();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleExpandBtn = () => {
    setIsExpanded(prev => !prev);
  }

  const animatedFadeUp = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: (delay = 0.25, duration = 0.8) => ({delay, duration})
  }

  return (
    <>
      {
        screenWidth < 768 ? 
          <motion.div 
            className={`${styles.widgetsAccordionContainer} ${isExpanded && styles.expanded}`}
            animate={{ height: isExpanded ? '70vh' : '0' }}
            transition={{ duration: 1.25 }}
          >
            {
              isExpanded && (
                <div className={styles.mobileWidgetsListContainer}>
                  <h2>List of Widgets</h2>
                  <div className={styles.widgetsList}>
                    {widgetsCards.map(card => (
                      <WidgetCard widgetName={card.widgetName} iconName={card.iconName}/>
                      ))}
                  </div>
                </div>
              )
            }
            <motion.button 
              className={`${styles.expandBtn} ${isExpanded && styles.expanded}`} 
              onClick={handleExpandBtn}
              animate={{ top: isExpanded ? 'calc(70vh - 20px)' : '' }}
              transition={{ duration: 1.25 }}
            >
              <img src="/whiteIcons/arrowHeadToRight-icon.png" alt="arrowHeadToRight-icon" />
            </motion.button>
          </motion.div>
          :
          <motion.div 
            className={styles.desktopWidgetsListContainer}
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
      }
    </>
  )
}

export default WidgetsList