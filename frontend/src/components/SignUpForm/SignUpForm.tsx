import styles from './css/SignUpForm.module.scss'

const SignUpForm = () => {
  return (
    <div className={styles.signUpContainer}>
      <h2>Create your account</h2>
      <div className={styles.oAuthOptionsContainer}>
        <button className={styles.googleOAuthBtn}>
          <img src="/frontend/public/logos/google-logo.png" alt="Google Logo" />
          <p>Google</p>
        </button>
        <button className={styles.githubOAuthBtn}>
          <img src="/frontend/public/logos/github-logo.png" alt="GitHub Logo" />
          <p>GitHub</p>
        </button>
        <div className={styles.divider}>
          <div className={styles.divisionLine}></div> {/*Division Line*/}
          <div className={styles.textOfDivisionLine}>Or</div>
          <div className={styles.divisionLine}></div> {/*Division Line*/}
        </div>
        <form className={styles.signUpForm}>
          <fieldset className={styles.inputsContainer}>
            <div className={styles.firstLastNameInputsContainer}>
              <input type="text" placeholder='Name'/>
              <input type="text" placeholder='Last Name'/>
            </div>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='password'/>
          </fieldset>
          <fieldset className={styles.checkboxesContainer}>
            <div>
              <input type="checkbox" name="termsAndConditions"  className={styles.checkbox}/>
              <label htmlFor="termsAndConditions">I agree with the <button>Terms and Conditions</button>.</label>
            </div>
            <div>
              <input type="checkbox" name="privacyPolicy" className={styles.checkbox}/>
              <label htmlFor="privacyPolicy">I agree with the <button>Privacy Policy</button>.</label>
            </div>
          </fieldset>
          <button className={styles.signUpFormBtn}>Sign Up</button>
          <div className={styles.signInRedirectPromptContainer}>
            <p>Already have an account?</p>
            <button>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpForm