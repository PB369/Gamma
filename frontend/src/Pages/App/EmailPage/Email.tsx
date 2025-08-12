import styles from'./css/EmailPage.module.scss'

const EmailPage = () => {
    return (
        <div className={styles.emailPageContainer}>
            <p>Connect to your Gmail</p>
            <button>Let's begin</button>
        </div>
    )
}

export default EmailPage