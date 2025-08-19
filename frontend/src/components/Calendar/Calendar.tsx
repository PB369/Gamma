import styles from './css/Calendar.module.scss'

type EventItem = {
  date: string;
  title: string;
  time?: string;
  color?: string;
};

type Props = {
  month: number;
  year: number;
  events: EventItem[];
  onDayClick?: (date: Date) => void;
}

const daysOfWeek  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Calendar = ({ month, year, events, onDayClick } : Props) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startDay = firstDayOfMonth.getDay();
    const totalDays = lastDayOfMonth.getDate();

    const days: (Date | null)[] = [];

    // Dias do mês
    for (let i = 1; i <= totalDays; i++) {
        days.push(new Date(year, month, i));
    }

    // Preenche até múltiplo de 7
    while (days.length % 7 !== 0) {
        days.push(null);
    }

    const getEventsForDay = (date: Date) => {
        const dateStr = date.toISOString().split("T")[0];
        return events.filter((ev) => ev.date === dateStr);
    };

    return (
        <div className={styles.calendar}>
        {/* Cabeçalho dos dias da semana */}
            <div className={styles.headerRow}>
                {daysOfWeek.map((day) => (
                <div key={day} className={styles.headerCell}>
                    {day}
                </div>
                ))}
            </div>

            {/* Grid de dias */}
            <div className={styles.daysGrid}>
                {days.map((date, idx) => {
                if (!date) {
                    return <div key={idx} className={styles.emptyCell} />;
                }

                const dayEvents = getEventsForDay(date);
                const visibleEvents = dayEvents.slice(0, 3);
                const extraCount = dayEvents.length - visibleEvents.length;

                return (
                    <div
                        key={date.toISOString()}
                        className={styles.dayCell}
                        onClick={() => onDayClick?.(date, )}
                    >
                    <div className={styles.dayNumber}>{date.getDate()}</div>

                    <div className={styles.events}>
                        {visibleEvents.map((ev, i) => (
                        <div key={i} className={styles.event}>
                            <div className={styles.eventNameAndColor}>
                                <span className={styles.eventColor} style={{backgroundColor: ev.color}}/>
                                <span className={styles.eventInfo}>{ev.title}</span>
                            </div>
                            <p className={styles.eventTime}>{ev.time}</p>
                        </div>
                        ))}
                        {extraCount > 0 && (
                        <div className={styles.moreEvents}>{extraCount} more...</div>
                        )}
                    </div>
                    </div>
                );
                })}
            </div>
        </div>
    )
}

export default Calendar