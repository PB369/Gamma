import { Link, useLocation } from 'react-router-dom';
import styles from './css/SidebarMobile.module.scss'

type Props = {
  onMenuBtnClick: () => void; 
}

const SidebarMobile = ({onMenuBtnClick}: Props) => {
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
        <button className={styles.menuBtn} onClick={onMenuBtnClick}>
          <img src="/whiteIcons/menu-icon.png" alt="menu-icon" />
        </button>
      </div>
    </>
  )
}

export default SidebarMobile;