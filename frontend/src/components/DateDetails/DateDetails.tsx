import { useState } from "react";
import type { DateDetailsType, EventItemType } from "../../Pages/App/CalendarPage/CalendarPage";
import styles from './css/DateDetails.module.scss'
import api from "../../services/api";

type Props = {
    dateDetails: DateDetailsType | undefined;
    setDateDetails: React.Dispatch<React.SetStateAction<DateDetailsType | undefined>>;
    events: EventItemType[];
    setEvents: React.Dispatch<React.SetStateAction<EventItemType[]>>;
    setShowDateDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const DateDetails = ({dateDetails, setDateDetails, events, setEvents, setShowDateDetails}: Props) => {
    const [expandEventIndex, setExpandEventIndex] = useState<number | undefined>(undefined);

    const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const handleCheckEvt = (event: EventItemType, index: number) => {
        if(!dateDetails) return;

        const updatedEvts = [...dateDetails.events]
        updatedEvts[index] = {...event, isFinished: !event.isFinished};
        setDateDetails({...dateDetails, events: updatedEvts});

        const updatedAllEvents = events.map(e => 
        e.id === event.id ? { ...e, isFinished: !e.isFinished } : e);
        setEvents(updatedAllEvents);

        api.patch(`/calendar/${event.id}`, {
            isFinished: !event.isFinished,
        })
        .then((res)=>{
            const updatedEvt = res.data
            const newEvts = [...dateDetails.events]
            newEvts[index] = updatedEvt
            setDateDetails({...dateDetails, events: newEvts})
        })
        .catch((err) => {
            console.error(err);
            updatedEvts[index] = event;
            setDateDetails({ ...dateDetails, events: updatedEvts });
            setEvents(events);
        });
    }

    return (
        <div className={styles.DateDetailsContainer}>
            <button className={styles.closeBtn} onClick={()=>setShowDateDetails(false)}>X</button>
            <h3 className={styles.dateTitle}>{dateDetails && monthsList[dateDetails?.month]} {dateDetails?.day}, {dateDetails?.year}</h3>
            <p className={styles.evtsContainerTitle}>Scheduled Activities</p>
            <div className={styles.eventsContainer}>
                {dateDetails && dateDetails.events.length > 0 ?
                dateDetails?.events.map((event, index) => {
                    const mustExpand = expandEventIndex === index 
                    return (
                        <div className={styles.eventCard}>
                            <div className={styles.leftMark}></div>
                            <div className={styles.evtCardContent}>
                                <div className={styles.defaultContent}>
                                    <div onClick={()=>setExpandEventIndex(mustExpand ? undefined : index)} className={`${styles.titleAndTime} ${event.isFinished && styles.checked}`}>
                                        <p className={styles.title}>{event.title}</p>
                                        <p className={styles.time}>{event.time ? `${event.time}` : "All day"}</p>
                                    </div>
                                    <div className={styles.checkEvtBtn}>
                                        <input 
                                        type="checkbox" 
                                        id={`eventCheckbox-${event.id}`}
                                        name={`eventCheckbox-${event.id}`} 
                                        checked={event.isFinished} className={styles.checkbox} 
                                        onChange={()=>handleCheckEvt(event, index)}
                                        />
                                        <label 
                                        htmlFor={`eventCheckbox-${event.id}`} 
                                        className={styles.checkmark}
                                        >
                                        </label>
                                    </div>
                                </div>
                                {mustExpand && (
                                    <div className={styles.expandedDetailsContainer}>
                                        {event.url && (
                                            <span>
                                                <img className={styles.infoIcon} src="/whiteIcons/link-icon.png" alt="location-icon" />
                                                <p>{event.url}</p>
                                            </span>
                                        )}
                                        {event.address && (
                                            <span>
                                                <img src="/whiteIcons/location-icon.png" alt="location-icon.png" />
                                                <p>{event.address}</p>
                                            </span>
                                        )}
                                        {event.description && (
                                            <span className={styles.descriptionContainer}>
                                                <img src="/whiteIcons/description-icon.png" alt="" />
                                                <p>{event.description}</p>
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )})
                    :
                    (<p className={styles.noEvtMessage}>There is no scheduled activities yet.</p>)
                }
            </div>
            <button className={styles.newEvtBtn}>Schedule a new activity</button>
        </div>
    )
}

export default DateDetails;