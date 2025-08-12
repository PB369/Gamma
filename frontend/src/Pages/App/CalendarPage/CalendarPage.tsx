import { useState } from 'react';
import Calendar from '../../../components/Calendar/Calendar'
import MonthSelector from '../../../components/MonthSelector/MonthSelector'
import styles from'./css/CalendarPage.module.scss'

const CalendarPage = () => {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());

    const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const events = [
        { date: "2025-08-10", title: "Meeting with Jam...", time: "8am", color: "#00ff00" },
        { date: "2025-08-10", title: "Pick up the car...", time: "11am", color: "#ff9900" },
        { date: "2025-08-10", title: "Presentation of...", time: "2pm", color: "#ff0000" },
        { date: "2025-08-10", title: "Coding Review...", time: "5pm", color: "#00ffff" },
        { date: "2025-08-10", title: "Extra Task", time: "7pm", color: "#cccccc" },
    ];

    return (
        <div className={styles.calendarPageContainer}>
            <div className={styles.monthSelectorContainer}>
                <p>{monthsList[month]}, {year}</p>
                <MonthSelector/>
            </div>
            <Calendar month={month} year={year} events={events} onDayClick={(date) => alert(date.toDateString())}/>
        </div>
    )
}

export default CalendarPage