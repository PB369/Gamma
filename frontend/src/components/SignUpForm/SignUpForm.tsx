import React, { useState, type Dispatch } from 'react';
import { useAuth } from '../../contexts/auth/useAuth'
import styles from './css/SignUpForm.module.scss'
import { AnimatePresence, motion } from "motion/react"
import TermsAndPolicyModal from '../TermsAndPolicyModal/TermsAndPolicyModal';
import type { formType, signUpFormDataType } from '../../utils/authFormTypes';

type Props = {
   setTypeOfForm: Dispatch<React.SetStateAction<formType>>;
}

const SignUpForm = ({ setTypeOfForm }: Props) => {
  const auth = useAuth();
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showTermsAndPolicyModal, setShowTermsAndPolicyModal] = useState<boolean>(false);
  const [isTermsOrPolicy, setIsTermsOrPolicy] = useState<'termsAndConditions' | 'privacyPolicy' | null>(null);
  const [isExiting , setIsExiting] = useState<boolean>(false);

  const [formData, setFormData] = useState<signUpFormDataType>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    termsAccepted: false,
    privacyAccepted: false,
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

  const handleSignUp = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => auth.signIn(), 3000);
  }

  const handleCheckboxLink = (e: React.FormEvent<HTMLButtonElement>, type: 'termsAndConditions' | 'privacyPolicy') => {
    e.preventDefault();
    setIsTermsOrPolicy(type);
    setShowTermsAndPolicyModal(true);
  }

  const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>, dataField: keyof signUpFormDataType) => {
    const inputValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({...formData, [dataField]: inputValue})
  }

  const validateForm = () => {
    const { firstName, lastName, email, password, termsAccepted, privacyAccepted } = formData;

    const hasNoNumbers = (text: string) => /^[^\d]+$/.test(text);
    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    return (
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      hasNoNumbers(firstName) &&
      hasNoNumbers(lastName) &&
      isValidEmail(email) &&
      password.length >= 8 &&
      termsAccepted &&
      privacyAccepted
    );
  };

  const isFormValid = validateForm();

  const handleSwitchFormType = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setIsExiting(true);
      setTimeout(()=>setTypeOfForm('signIn'), 1500);
  }

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div 
          className={styles.signUpContainer} 
          {...animatedFadeUp} {...animatedFadeOut}
          transition={animatedFadeUp.transition(0.25, 1.5)}
        >
          <h2>Create your account</h2>
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
          <form className={styles.signUpForm}>
            <fieldset className={styles.inputsContainer}>
              <div className={styles.firstLastNameInputsContainer}>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    placeholder='First Name'
                    value={formData.firstName}
                    onChange={e=>handleFormDataChange(e, 'firstName')}
                  />
                  {formData.firstName && !/^[^\d]+$/.test(formData.firstName) && (
                    <p className={styles.errorMsg}>No numbers allowed</p>
                  )}
                </div>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    placeholder='Last Name'
                    value={formData.lastName}
                    onChange={e=>handleFormDataChange(e, 'lastName')}
                  />
                  {formData.lastName && !/^[^\d]+$/.test(formData.lastName) && (
                    <p className={styles.errorMsg}>No numbers allowed</p>
                  )}
                </div>
              </div>
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
            <fieldset className={styles.checkboxesContainer}>
              <div className={styles.checkboxWrapper}>
                <input 
                  type="checkbox" 
                  id='termsAndConditions' 
                  name='termsAndConditions' 
                  checked={formData.termsAccepted} className={styles.checkbox} 
                  onChange={e=>handleFormDataChange(e, 'termsAccepted')}
                />
                <label 
                  htmlFor='termsAndConditions' 
                  className={styles.checkmark}
                >
                </label>
                <p>I agree with the <button onClick={e=>handleCheckboxLink(e, 'termsAndConditions')}>Terms and Conditions</button>.</p>
              </div>
              <div className={styles.checkboxWrapper}>
                <input 
                  type="checkbox" 
                  id='privacyPolicy' 
                  name='privacyPolicy' 
                  checked={formData.privacyAccepted} 
                  className={styles.checkbox}
                  onChange={e=>handleFormDataChange(e, 'privacyAccepted')}
                />
                <label 
                  htmlFor='privacyPolicy' 
                  className={styles.checkmark}
                >
                </label>
                <p>I agree with the <button onClick={e=>handleCheckboxLink(e, 'privacyPolicy')}>Privacy Policy</button>.</p>
              </div>
            </fieldset>
            <button 
              type='button' 
              className={styles.signUpFormBtn} 
              onClick={handleSignUp} 
              disabled={isLoading || !isFormValid}
            >
              {isLoading ? <span className={styles.loader}></span> : 'Sign Up'}
            </button>
            <div className={styles.signInRedirectPromptContainer}>
              <p>Already have an account?</p>
              <button type='button' onClick={e=>handleSwitchFormType(e)}>Sign In</button>
            </div>
          </form>
        </motion.div>
      )}
      {
        showTermsAndPolicyModal && isTermsOrPolicy && 
          <TermsAndPolicyModal 
            typeOfModal={isTermsOrPolicy} 
            setShowTermsAndPolicyModal={setShowTermsAndPolicyModal}
          />
      }
    </AnimatePresence>
  )
}

export default SignUpForm