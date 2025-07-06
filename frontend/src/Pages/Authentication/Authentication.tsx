import SignUpForm from '../../components/SignUpForm/SignUpForm';
import styles from './css/Authentication.module.scss'

const Authentication = () => {

  return (
    <div className={styles.authenticationPageContainer}>
      <SignUpForm/>
    </div>
  )
}

export default Authentication