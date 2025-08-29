import { useEffect, useState } from 'react';
import Calendar from '../../../components/Calendar/Calendar'
import MonthSelector from '../../../components/MonthSelector/MonthSelector'
import styles from'./css/CalendarPage.module.scss'
import api from '../../../services/api';
import DateDetails from '../../../components/DateDetails/DateDetails';

export type DateDetailsType = {
    day: number;
    month: number;
    year: number;
    events: EventItemType[];
}

export type EventItemType = {
    id: number;
    created_at: string;
    date: string;
    title: string;
    isFinished: boolean;
    time?: string;
    color?: string;
    link?: string;
    address?: string;
    description?: string;
};

const CalendarPage = () => {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [dateDetails, setDateDetails] = useState<DateDetailsType | undefined>(undefined);
    const [showDateDetails, setShowDateDetails] = useState<boolean>(false);

    
    const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const [events, setEvents] = useState<EventItemType[]>([]);

    useEffect(() => {
        api.get("/calendar")
        .then((res) => setEvents(res.data))
        .catch((err) => console.error(err));
    }, []);
    
    useEffect(() => {
        console.log(events);
    }, [events]);
    
    const handleDayClick = (date: Date) => {
        const isoDate = date.toISOString().split("T")[0];

        setDateDetails(() => ({
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
            events: events.filter(event => event.date === isoDate).sort((a, b)=>new Date(a.created_at).getTime()-new Date(b.created_at).getTime()),
        }));

        setShowDateDetails(true);
    }

    const nextMonth = () => {
        if (month === 11) {
        setMonth(0);
        setYear(prev => prev + 1);
        } else {
        setMonth(prev => prev + 1);
        }
    };

    const prevMonth = () => {
        if (month === 0) {
        setMonth(11);
        setYear(prev => prev - 1);
        } else {
        setMonth(prev => prev - 1);
        }
    };

    const onToday = () => {
        const today = new Date();
        setMonth(today.getMonth());
        setYear(today.getFullYear());
        handleDayClick(today)
    };

    return (
        <div className={styles.calendarPageContainer}>
            <div className={styles.monthSelectorContainer}>
                <p>{monthsList[month]}, {year}</p>
                <MonthSelector onNext={nextMonth} onPrev={prevMonth} onToday={onToday}/>
            </div>
            <Calendar month={month} year={year} events={events} onDayClick={(date)=>handleDayClick(date)}/>
            {showDateDetails && (
                <DateDetails dateDetails={dateDetails} setDateDetails={setDateDetails} events={events} setEvents={setEvents} setShowDateDetails={setShowDateDetails}/>
            )}
        </div>
    )
}

export default CalendarPage