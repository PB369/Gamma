import { useState } from "react";
import type { DateDetailsType } from "../../Pages/App/CalendarPage/CalendarPage";
import styles from './css/DateDetails.module.scss'

type Props = {
    dateDetails: DateDetailsType | undefined;
    setShowDateDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const DateDetails = ({dateDetails, setShowDateDetails}: Props) => {
    const [expandEventIndex, setExpandEventIndex] = useState<number | undefined>(undefined);

    const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
                                    <div onClick={()=>setExpandEventIndex(mustExpand ? undefined : index)} className={styles.titleAndTime}>
                                        <p className={styles.title}>{event.title}</p>
                                        <p className={styles.time}>{event.time ? `${event.time}` : "All day"}</p>
                                    </div>
                                    <button className={styles.checkEvtBtn}></button>
                                </div>
                                {mustExpand && (
                                    <div className={styles.expandedDetailsContainer}>
                                        {event.url && (
                                            <span>
                                                <img className={styles.infoIcon} src="/whiteIcons/location-icon.png" alt="" />
                                                <p>{event.url}</p>
                                            </span>
                                        )}
                                        {event.address && (
                                            <span>
                                                <img src="" alt="" />
                                                <p>{event.address}</p>
                                            </span>
                                        )}
                                        {event.description && (
                                            <span className={styles.descriptionContainer}>
                                                <img src="" alt="" />
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