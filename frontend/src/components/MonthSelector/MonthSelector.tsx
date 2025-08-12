import styles from './css/MonthSelector.module.scss'

const MonthSelector = () => {
    return (
        <div className={styles.MonthSelectorContainer}>
            <button className={styles.toLeftSelectorBtn}>
                <img src="/whiteIcons/arrowHeadToRight-icon.png" alt="arrow-icon" />
            </button>

            <button className={styles.todaySelectorBtn}>Today</button>

            <button className={styles.toRightSelectorBtn}>
                <img src="/whiteIcons/arrowHeadToRight-icon.png" alt="arrow-icon" />
            </button>
        </div>
    )
}

export default MonthSelector