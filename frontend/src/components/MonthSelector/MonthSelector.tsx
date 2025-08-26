import styles from './css/MonthSelector.module.scss'

type Props = {
    onNext: ()=>void;
    onPrev: ()=>void;
    onToday: ()=>void;
}

const MonthSelector = ({ onNext, onPrev, onToday }: Props) => {
    return (
        <div className={styles.MonthSelectorContainer}>
            <button className={styles.toLeftSelectorBtn} onClick={onPrev}>
                <img src="/whiteIcons/arrowHeadToRight-icon.png" alt="arrow-icon" />
            </button>

            <button className={styles.todaySelectorBtn} onClick={onToday}>Today</button>

            <button className={styles.toRightSelectorBtn} onClick={onNext}>
                <img src="/whiteIcons/arrowHeadToRight-icon.png" alt="arrow-icon" />
            </button>
        </div>
    )
}

export default MonthSelector