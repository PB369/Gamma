import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./css/AppLayout.module.scss"

const AppLayout = () => (
  <div className={styles.appLayout}>
    <Sidebar/>
    <main className={styles.pageMainContent}>
      <Outlet/>
    </main>
  </div>
);

export default AppLayout;
