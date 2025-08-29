import type { DateDetailsType, EventItemType } from '../../Pages/App/CalendarPage/CalendarPage';
import styles from './css/EventsContainer.module.scss'

type Props = {
  dateDetails: DateDetailsType | undefined;
  expandEventIndex: number | undefined;
  setExpandEventIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  handleContextMenu: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, event: EventItemType, index: number) => void;
  handleCheckEvt: (event: EventItemType, index: number) => void;
}

const EventsContainer = ({ dateDetails, expandEventIndex, setExpandEventIndex, handleContextMenu,  handleCheckEvt }: Props) => {
  return (
    <div className={styles.eventsContainer}>
        {dateDetails && dateDetails.events.length > 0 ?
            dateDetails?.events.map((event, index) => {
                const mustExpand = expandEventIndex === index 
                return (
                    <div 
                        className={styles.eventCard}
                        style={{backgroundColor: `${event.color}` + 59}}
                        onContextMenu={e=>handleContextMenu(e, event, index)}
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
  )
}

export default EventsContainer;