import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./css/AppLayout.module.scss"
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import { useAuth } from "../../contexts/auth/useAuth";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

const AppLayout = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { signOut } = useAuth()

  const handleSignOut = () => {
    signOut()
    setShowConfirmModal(false)
  }

  return (
    <div className={styles.appLayout}>
      <Sidebar onSignOutBtnClick={()=>setShowConfirmModal(true)}/>
      <main className={styles.pageMainContent}>
        <Outlet/>
      </main>
      <AnimatePresence>
        {showConfirmModal && (
          <>
            <div
              className={styles.confirmModalBackdrop}
              onClick={() => setShowConfirmModal(false)}
            />
            <ConfirmModal 
              actionType="signOut" 
              onCancelAction={() => setShowConfirmModal(false)} 
              onConfirmAction={handleSignOut} 
            />
          </>
        )}
      </AnimatePresence>
    </div>
  )
};

export default AppLayout;
