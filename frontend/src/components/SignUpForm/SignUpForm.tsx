import React, { useState } from 'react';
import { useAuth } from '../../contexts/auth/useAuth'
import styles from './css/SignUpForm.module.scss'
import { motion } from "motion/react"
import TermsAndPolicyModal from '../TermsAndPolicyModal/TermsAndPolicyModal';
import type { formDataType } from '../../utils/formDataType';

const SignUpForm = () => {
  const auth = useAuth();
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showTermsAndPolicyModal, setShowTermsAndPolicyModal] = useState<boolean>(false);
  const [isTermsOrPolicy, setIsTermsOrPolicy] = useState<'termsAndConditions' | 'privacyPolicy' | null>(null);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const [formData, setFormData] = useState<formDataType>({
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

  const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>, dataField: keyof formDataType) => {
    const inputValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({...formData, [dataField]: inputValue})
  }

  const isInputDataValid = (dataField: keyof formDataType, inputValue: string | boolean) => {
    let errorMessage: string;
    if(!inputValue) {setIsFormValid(false)}

    if(typeof inputValue === 'string') {
      if(inputValue && (dataField === 'firstName' || dataField === 'lastName')) {
        if(/\d/.test(inputValue)) {errorMessage = 'Numbers are not allowed'}
      }

      if(inputValue && dataField === 'email') {
        if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)) {errorMessage='Invalid email format'}
      }

      if(inputValue && dataField==='password') {
        if(inputValue.length < 8) {errorMessage='Must be at least 8 characters'}
      }
    }
  }

  return (
    <>
      <motion.div className={styles.signUpContainer} {...animatedFadeUp} transition={animatedFadeUp.transition(0.25, 1.5)}>
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
              <input type="text" placeholder='First Name' value={formData.firstName} onChange={e=>handleFormDataChange(e, 'firstName')}/>
              <input type="text" placeholder='Last Name' value={formData.lastName} onChange={e=>handleFormDataChange(e, 'lastName')}/>
            </div>
            <input type="email" placeholder='Email' value={formData.email} onChange={e=>handleFormDataChange(e, 'email')}/>
            <input type="password" placeholder='Password' value={formData.password} onChange={e=>handleFormDataChange(e, 'password')}/>
          </fieldset>
          <fieldset className={styles.checkboxesContainer}>
            <div className={styles.checkboxWrapper}>
              <input type="checkbox" id='termsAndConditions' name='termsAndConditions' checked={formData.termsAccepted} className={styles.checkbox} onChange={e=>handleFormDataChange(e, 'termsAccepted')}/>
              <label htmlFor='termsAndConditions' className={styles.checkmark}></label>
              <p>I agree with the <button onClick={e=>handleCheckboxLink(e, 'termsAndConditions')}>Terms and Conditions</button>.</p>
            </div>
            <div className={styles.checkboxWrapper}>
              <input type="checkbox" id='privacyPolicy' name='privacyPolicy' checked={formData.privacyAccepted} className={styles.checkbox}onChange={e=>handleFormDataChange(e, 'privacyAccepted')}/>
              <label htmlFor='privacyPolicy' className={styles.checkmark}></label>
              <p>I agree with the <button onClick={e=>handleCheckboxLink(e, 'privacyPolicy')}>Privacy Policy</button>.</p>
            </div>
          </fieldset>
          <button type='button' className={styles.signUpFormBtn} onClick={handleSignUp} disabled={isLoading}>{isLoading ? <span className={styles.loader}></span> : 'Sign Up'}</button>
          <div className={styles.signInRedirectPromptContainer}>
            <p>Already have an account?</p>
            <button type='button'>Sign In</button>
          </div>
        </form>
      </motion.div>
      {showTermsAndPolicyModal && isTermsOrPolicy && <TermsAndPolicyModal typeOfModal={isTermsOrPolicy} setShowTermsAndPolicyModal={setShowTermsAndPolicyModal}/>}
    </>
  )
}

export default SignUpForm