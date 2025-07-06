import { useAuth } from '../../contexts/auth/useAuth'
import styles from './css/SignUpForm.module.scss'
import { motion } from "motion/react"

const SignUpForm = () => {
  const auth = useAuth();

  const animatedFadeUp = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: (delay = 0.25, duration = 0.8) => ({delay, duration})
  }

  const handleSignUp = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    auth.signIn();
  }

  return (
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
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Last Name'/>
          </div>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
        </fieldset>
        <fieldset className={styles.checkboxesContainer}>
          <div className={styles.checkboxWrapper}>
            <input type="checkbox" id='termsAndConditions' name='termsAndConditions' className={styles.checkbox}/>
            <label htmlFor='termsAndConditions' className={styles.checkmark}></label>
            <p>I agree with the <button>Terms and Conditions</button>.</p>
          </div>
          <div className={styles.checkboxWrapper}>
            <input type="checkbox" id='privacyPolicy' name='privacyPolicy' className={styles.checkbox}/>
            <label htmlFor='privacyPolicy' className={styles.checkmark}></label>
            <p>I agree with the <button>Privacy Policy</button>.</p>
          </div>
        </fieldset>
        <button type='button' className={styles.signUpFormBtn} onClick={handleSignUp}>Sign Up</button>
        <div className={styles.signInRedirectPromptContainer}>
          <p>Already have an account?</p>
          <button type='button'>Sign In</button>
        </div>
      </form>
    </motion.div>
  )
}

export default SignUpForm