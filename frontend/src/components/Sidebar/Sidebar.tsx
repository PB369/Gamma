import { Link, useLocation } from 'react-router-dom';
import styles from './css/Sidebar.module.scss'

type Props = {
  onSignOutBtnClick: () => void; 
}

const Sidebar = ({onSignOutBtnClick}: Props) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  const chooseIconPath = (linkPath: string, iconName: string) => {
    if(isActive(linkPath)){
      return `/yellowIcons/${iconName}`
    } else {
      return `/whiteIcons/${iconName}`
    }
  }

  return (
    <>
      <div className={styles.sidebarContainer}>
        <img className={styles.gammaLogo} src="/logos/gamma-yellow.png" alt="gamma-logo" />
        <nav className={styles.pagesNavigator}>
          <ul>
            <li>
              <Link to='/app/dashboard' className={styles.link}>
                <img 
                  src={chooseIconPath("/app/dashboard", "home-icon.png")} 
                  alt="home-icon" 
                />
              </Link>
            </li>
            <li>
              <Link to='/app/widgets' className={styles.link}>
                <img 
                  src={chooseIconPath("/app/widgets", "widgets-icon.png")} 
                  alt="home-icon" 
                />
              </Link>
            </li>
            <li>
              <Link to='/app/chat' className={styles.link}>
                <img 
                  src={chooseIconPath("/app/chat", "chat-icon.png")} 
                  alt="home-icon" 
                />
              </Link>
            </li>
            <li>
              <Link to='/app/playlist' className={styles.link}>
                <img 
                  src={chooseIconPath("/app/playlist", "playlist-icon.png")} 
                  alt="playlist-icon" 
                />
              </Link>
            </li>
            <li>
              <Link to='/app/email' className={styles.link}>
                <img 
                  src={chooseIconPath("/app/email", "email-icon.png")} 
                  alt="email-icon" 
                />
              </Link>
            </li>
            <li>
              <Link to='/app/calendar' className={styles.link}>
                <img 
                  src={chooseIconPath("/app/calendar", "calendar-icon.png")} 
                  alt="calendar-icon" 
                />
              </Link>
            </li>
            <li>
              <Link to='/app/settings' className={styles.link}>
                <img 
                  src={chooseIconPath("/app/settings", "settings-icon.png")} 
                  alt="settings-icon" 
                />
              </Link>
            </li>
          </ul>
        </nav>
        <button className={styles.logoutBtn} onClick={onSignOutBtnClick}>
          <img src="/whiteIcons/logout-icon.png" alt="logout-icon" />
        </button>
      </div>
    </>
  )
}

export default Sidebar;