import { useState } from 'react';
import Calendar from '../../../components/Calendar/Calendar'
import MonthSelector from '../../../components/MonthSelector/MonthSelector'
import styles from'./css/CalendarPage.module.scss'

type DateDetails = {
    day: number;
    month: number;
    year: number;
}

const CalendarPage = () => {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [dateDetails, setDateDetails] = useState<DateDetails | undefined>(undefined);

    const handleDayClick = (date: Date) => {
        setDateDetails(prev => ({
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
        }))
    }

    const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    

    return (
        <div className={styles.calendarPageContainer}>
            <div className={styles.monthSelectorContainer}>
                <p>{monthsList[month]}, {year}</p>
                <MonthSelector/>
            </div>
            <Calendar month={month} year={year} events={events} onDayClick={(date)=>handleDayClick(date)}/>
        </div>
    )
}

export default CalendarPage