import React, { useState, type Dispatch } from 'react';
import { useAuth } from '../../contexts/auth/useAuth'
import styles from './css/SignInForm.module.scss'
import { AnimatePresence, motion } from "motion/react"
import type { formType, signInFormDataType } from '../../utils/authFormTypes';

type Props = {
   setTypeOfForm: Dispatch<React.SetStateAction<formType>>;
}

const SignInForm = ({ setTypeOfForm }: Props) => {
  const auth = useAuth();
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isExiting , setIsExiting] = useState<boolean>(false);

  const [formData, setFormData] = useState<signInFormDataType>({
    email: '',
    password: '',
  });

  const animatedFadeUp = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: (delay = 0.25, duration = 0.8) => ({delay, duration})
  }

  const animatedFadeOut = {
    exit: { opacity: 0 },
    animate: { opacity: 1 },
    transition: (delay = 0.25, duration = 0.8) => ({delay, duration})
  }

  const handleSignIn = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => auth.signIn(), 3000);
  }

  const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>, dataField: keyof signInFormDataType) => {
    const inputValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({...formData, [dataField]: inputValue})
  }

  const validateForm = () => {
    const { email, password } = formData;

    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    return (
      isValidEmail(email) &&
      password.length >= 8
    );
  };

  const isFormValid = validateForm();

  const handleSwitchFormType = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsExiting(true);
    setTimeout(()=>setTypeOfForm('signUp'), 1500);
  }


  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div 
          className={styles.signInContainer} 
          {...animatedFadeUp} {...animatedFadeOut}
          transition={animatedFadeUp.transition(0.25, 1.5)}
        >
          <h2>Nice to see you again!</h2>
          <div className={styles.oAuthOptionsContainer}>
            <button className={styles.googleOAuthBtn}>
              <img src="/logos/google-logo.png" alt="Google Logo" />
              <p>Google</p>
            </button>
            <button className={styles.githubOAuthBtn}>
              <img src="/logos/github-logo.png" alt="GitHub Logo" />
              <p>GitHub</p>
            </button>
          </div>
          <div className={styles.divider}>
            <div className={styles.divisionLine}></div>
            <div className={styles.textOfDivisionLine}>Or</div>
            <div className={styles.divisionLine}></div>
          </div>
          <form className={styles.signInForm}>
            <fieldset className={styles.inputsContainer}>
              <div className={styles.inputContainer}>
                <input
                  type="email"
                  placeholder='Email'
                  value={formData.email}
                  onChange={e=>handleFormDataChange(e, 'email')}
                />
                  {formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) === false && (
                    <p className={styles.errorMsg}>Invalid email format</p>
                  )}
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="password"
                  placeholder='Password'
                  value={formData.password}
                  onChange={e=>handleFormDataChange(e, 'password')}
                />
                  {formData.password && formData.password.length < 8 && (
                    <p className={styles.errorMsg}>Must be at least 8 characters</p>
                  )}
              </div>
            </fieldset>
            <button 
              type='button' 
              className={styles.signInFormBtn} 
              onClick={handleSignIn} 
              disabled={isLoading || !isFormValid}
            >
              {isLoading ? <span className={styles.loader}></span> : 'Sign In'}
            </button>
            <div className={styles.signInRedirectPromptContainer}>
              <p>Don't have an account?</p>
              <button type='button' onClick={e=>handleSwitchFormType(e)}>Sign In</button>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SignInForm