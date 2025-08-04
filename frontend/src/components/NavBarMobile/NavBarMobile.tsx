import { Link, useLocation } from 'react-router-dom';
import styles from './css/NavBarMobile.module.scss'
import { useState } from 'react';
import { motion } from 'motion/react';

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

  return (
    <>
      <div className={`${styles.navBarContainer} ${isExpanded ? styles.expanded : ''}`}>
        <div className={styles.navBarHeader}>
          <img className={styles.gammaLogo} src="/logos/gamma-yellow.png" alt="gamma-logo" />
          <button className={styles.menuBtn} onClick={onMenuBtnClick}>
            {isExpanded ?
              'X'
              :
              <img src={`/whiteIcons/menu-icon.png`} alt="menu-icon" />}
          </button>
        </div>

        {isExpanded && (
          <div className={styles.navSectionContainer}>
            <div className={styles.top}/>
            <nav className={styles.pagesNavigator}>
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
            </nav>
            <button className={styles.logoutBtn} onClick={onSignOutBtnClick}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default NavBarMobile;