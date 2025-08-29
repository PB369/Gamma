import { useState } from "react";
import type { DateDetailsType, EventItemType } from "../../Pages/App/CalendarPage/CalendarPage";
import styles from './css/DateDetails.module.scss'
import api from "../../services/api";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import ElementOptions from "../ElementOptions/ElementOptions";
import EventsContainer from "../EventsContainer/EventsContainer";

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
    const [selectedEvent, setSelectedEvent] = useState<EventItemType | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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

    const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>, event: EventItemType, index: number) => {
        e.preventDefault();
        setCursorPosition([e.clientX, e.clientY]);
        setShowEventOptions(true);
        setSelectedEvent(event);
        setSelectedIndex(index);
    }

    const handleDeleteEvent = async (event: EventItemType, index: number) => {
        if (!dateDetails) return;

        const prevDateDetails = { ...dateDetails };
        const prevEvents = [...events];

        const updatedDateEvents = dateDetails.events.filter((_, i) => i !== index);
        setDateDetails({ ...dateDetails, events: updatedDateEvents });

        const updatedAllEvents = events.filter(e => e.id !== event.id);
        setEvents(updatedAllEvents);

        try {
            await api.delete(`/calendar/${event.id}`);
            setDeleteOption(false);
            setShowEventOptions(false);
        } catch (err) {
            console.error(err);
            setDateDetails(prevDateDetails);
            setEvents(prevEvents);
        }
    }

    return (
        <div className={styles.DateDetailsContainer}>
            <button className={styles.closeBtn} onClick={()=>setShowDateDetails(false)}>X</button>
            <h3 className={styles.dateTitle}>{dateDetails && monthsList[dateDetails?.month]} {dateDetails?.day}, {dateDetails?.year}</h3>
            <p className={styles.evtsContainerTitle}>Scheduled Activities</p>
            <EventsContainer dateDetails={dateDetails} expandEventIndex={expandEventIndex} handleCheckEvt={handleCheckEvt} handleContextMenu={handleContextMenu} setExpandEventIndex={setExpandEventIndex}/>
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
            {deleteOption && selectedEvent && selectedIndex !== null &&
                (<ConfirmModal actionType='deleteEvent' onCancelAction={()=>setDeleteOption(false)} onConfirmAction={() => handleDeleteEvent(selectedEvent, selectedIndex)}/>)}
        </div>
    )
}

export default DateDetails;