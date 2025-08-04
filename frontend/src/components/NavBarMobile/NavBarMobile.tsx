import { Link, useLocation } from 'react-router-dom';
import styles from './css/NavBarMobile.module.scss'

type Props = {
  onMenuBtnClick: () => void; 
}

const NavBarMobile = ({onMenuBtnClick}: Props) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className={styles.navBarContainer}>
        <img className={styles.gammaLogo} src="/logos/gamma-yellow.png" alt="gamma-logo" />
        <button className={styles.menuBtn} onClick={onMenuBtnClick}>
          <img src="/whiteIcons/menu-icon.png" alt="menu-icon" />
        </button>
      </div>
    </>
  )
}

export default NavBarMobile;