import Calendar from '../../../components/Calendar/Calendar'
import MonthSelector from '../../../components/MonthSelector/MonthSelector'
import styles from'./css/CalendarPage.module.scss'

const CalendarPage = () => {
    return (
        <div className={styles.calendarPageContainer}>
            <div className={styles.monthSelectorContainer}>
                <p>August, 2025</p>
                <MonthSelector/>
            </div>
            <Calendar/>
        </div>
    )
}

export default CalendarPage