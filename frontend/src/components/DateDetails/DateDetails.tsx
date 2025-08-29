import { useState } from "react";
import type { DateDetailsType, EventItemType } from "../../Pages/App/CalendarPage/CalendarPage";
import styles from './css/DateDetails.module.scss'
import api from "../../services/api";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import ElementOptions from "../ElementOptions/ElementOptions";

type Props = {
    dateDetails: DateDetailsType | undefined;
    setDateDetails: React.Dispatch<React.SetStateAction<DateDetailsType | undefined>>;
    events: EventItemType[];
    setEvents: React.Dispatch<React.SetStateAction<EventItemType[]>>;
    setShowDateDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const DateDetails = ({dateDetails, setDateDetails, events, setEvents, setShowDateDetails}: Props) => {
    const [expandEventIndex, setExpandEventIndex] = useState<number | undefined>(undefined);
    const [cursorPosition, setCursorPosition] = useState([0, 0]);
    const [showEventOptions, setShowEventOptions] = useState<boolean>(false);
    const [editOption, setEditOption] = useState(false);
    const [deleteOption, setDeleteOption] = useState(false);

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

    const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setCursorPosition([e.clientX, e.clientY]);
        setShowEventOptions(true)
    }

    const handleDeleteEvent = () => {
        
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
                            <div 
                                className={styles.eventCard}
                                style={{backgroundColor: `${event.color}` + 59}}
                                onContextMenu={e=>handleContextMenu(e)}
                            >
                                <div 
                                    className={styles.leftMark}
                                    style={{backgroundColor: `${event.color}`}}
                                />
                                <div className={styles.evtCardContent}>
                                    <div className={styles.defaultContent}>
                                        <div onClick={()=>setExpandEventIndex(mustExpand ? undefined : index)} className={`${styles.titleAndTime} ${event.isFinished && styles.checked}`}>
                                            <p className={styles.title}>{event.title}</p>
                                            <p className={styles.time}>{event.time ? `${event.time}` : "All day"}</p>
                                        </div>
                                        <div 
                                            className={styles.checkEvtBtn}
                                            style={{borderColor: `${event.color}`}}
                                        >
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
                                                style={{
                                                    borderColor: `${event.color}`,
                                                    backgroundColor: event.isFinished ? `${event.color}` : 'transparent'
                                                }}
                                            >
                                            </label>
                                        </div>
                                    </div>
                                    {mustExpand && (
                                        <div 
                                            className={styles.expandedDetailsContainer}
                                            style={{
                                                borderColor: `${event.color}`
                                            }}
                                        >
                                            {event.link && (
                                                <span>
                                                    <img className={styles.linkIcon} src="/whiteIcons/link-icon.png" alt="location-icon" />
                                                    <a href={event.link} target="_blank" rel="noopener noreferrer">{event.link}</a>
                                                </span>
                                            )}
                                            {event.address && (
                                                <span>
                                                    <img src="/whiteIcons/location-icon.png" alt="location-icon.png" />
                                                    <a
                                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {event.address}
                                                    </a>
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
                        )
                    })
                    :
                    (<p className={styles.noEvtMessage}>There is no scheduled activities yet.</p>)
                }
            </div>
            <button className={styles.newEvtBtn}>Schedule a new activity</button>
            {showEventOptions && 
                <ElementOptions 
                elementType={'chatCard'} 
                setEditOption={setEditOption} 
                setDeleteOption={setDeleteOption} 
                cursorPosition={cursorPosition}
                onClose={()=>setShowEventOptions(false)}
                />
            }
            {deleteOption && <ConfirmModal actionType='deleteChat' onCancelAction={()=>setDeleteOption(false)} onConfirmAction={handleDeleteEvent}/>}
        </div>
    )
}

export default DateDetails;