import styles from './css/CalendarDateDetails.module.scss'

type Props = {
    date: string,
}

const CalendarDateDetails = ({ date, }: Props) => {
    return (
        <div className={styles.DateDetailsContainer}>
            <div>
                <button>X</button>
                <p>{date}</p>
            </div>
            <div>
                <p>Scheduled Activities</p>
                <div>

                </div>
            </div>
            <button>Schedule a new activity</button>
        </div>
    )
}

export default CalendarDateDetails