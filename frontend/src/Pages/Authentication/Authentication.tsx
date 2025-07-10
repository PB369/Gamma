import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';
import styles from './css/Authentication.module.scss'
import type { formType } from '../../utils/authFormTypes';

const Authentication = () => {

  const [typeOfForm, setTypeOfForm] = useState<formType>('signUp');

  return (
    <div className={styles.authenticationPageContainer}>
      {typeOfForm === 'signUp' ? <SignUpForm setTypeOfForm={setTypeOfForm}/> : <SignInForm setTypeOfForm={setTypeOfForm}/>}
    </div>
  )
}

export default Authentication