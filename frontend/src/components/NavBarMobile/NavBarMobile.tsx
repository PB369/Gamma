import { Link, useLocation } from 'react-router-dom';
import styles from './css/NavBarMobile.module.scss'
import { useState } from 'react';
import { motion } from 'motion/react';
import { Divide as Hamburger } from 'hamburger-react'

type Props = {
  onSignOutBtnClick: () => void; 
}

const NavBarMobile = ({onSignOutBtnClick}: Props) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const onMenuBtnClick = () => {
    setIsExpanded(prev => !prev)
  }

  const animatedFadeUp = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: (delay = 0.25, duration = 0.8) => ({delay, duration})
  }

  return (
    <>
      <motion.div className={`${styles.navBarContainer} ${isExpanded ? styles.expanded : ''}`}
      animate={{ height: isExpanded ? '100vh' : '10vh' }}
      transition={{ duration: 0.25 }}
      >
        <div className={styles.navBarHeader}>
          <img className={styles.gammaLogo} src="/logos/gamma-yellow.png" alt="gamma-logo" />
          <Hamburger onToggle={onMenuBtnClick} color='white'/>
        </div>

        {isExpanded && (
          <div className={styles.navSectionContainer}>
            <div className={styles.top}/>
            <motion.nav 
              className={styles.pagesNavigator}
              {...animatedFadeUp}
              transition={animatedFadeUp.transition(0.35, 1.5)}
            >
              <ul>
                <li>
                  <Link to='/app/dashboard' className={`${styles.link} ${isActive('/app/dashboard') ? styles.currentPage : ''}`} onClick={()=>setIsExpanded(false)}>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to='/app/widgets' className={`${styles.link} ${isActive('/app/widgets') ? styles.currentPage : ''}`} onClick={()=>setIsExpanded(false)}>
                    Widgets
                  </Link>
                </li>
                <li>
                  <Link to='/app/chat' className={`${styles.link} ${isActive('/app/chat') ? styles.currentPage : ''}`} onClick={()=>setIsExpanded(false)}>
                    Gaia Chat
                  </Link>
                </li>
                <li>
                  <Link to='/app/playlist' className={`${styles.link} ${isActive('/app/playlist') ? styles.currentPage : ''}`} onClick={()=>setIsExpanded(false)}>
                    Playlist
                  </Link>
                </li>
                <li>
                  <Link to='/app/email' className={`${styles.link} ${isActive('/app/email') ? styles.currentPage : ''}`} onClick={()=>setIsExpanded(false)}>
                    Email
                  </Link>
                </li>
                <li>
                  <Link to='/app/calendar' className={`${styles.link} ${isActive('/app/calendar') ? styles.currentPage : ''}`} onClick={()=>setIsExpanded(false)}>
                    Calendar
                  </Link>
                </li>
                <li>
                  <Link to='/app/settings' className={`${styles.link} ${isActive('/app/settings') ? styles.currentPage : ''}`} onClick={()=>setIsExpanded(false)}>
                    Settings
                  </Link>
                </li>
              </ul>
            </motion.nav>
            <motion.button 
              className={styles.logoutBtn} onClick={onSignOutBtnClick}
              {...animatedFadeUp}
              transition={animatedFadeUp.transition(0.35, 1.5)}
            >
              Sign Out
            </motion.button>
          </div>
        )}
      </motion.div>
    </>
  )
}

export default NavBarMobile;