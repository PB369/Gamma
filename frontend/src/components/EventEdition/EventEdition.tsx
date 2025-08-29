import { useEffect, useRef, useState } from 'react';
import type { DateDetailsType, EventItemType } from '../../Pages/App/CalendarPage/CalendarPage';
import styles from './css/EventEdition.module.scss'

type Props = {
  dateDetails: DateDetailsType;
  selectedEvent: EventItemType | null;
  selectedIndex: number;
}

const EventEdition = ({ dateDetails, selectedEvent, selectedIndex }: Props) => {
  const [editOption, setEditOption] = useState(false);
  const evtTitleInputRef = useRef<HTMLInputElement>(null);
  const [evtTitle, setEvtTitle] = useState("Name of the chat");
  const evtInfos = dateDetails.events[selectedIndex];
  console.log(dateDetails.events)

  const handleFinishTitleEdition = (e?: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => {
    if('key' in e!){
      if(e.key !== 'Enter') return
    }
    setEditOption(false);
  }

  useEffect(() => {
    if (editOption) {
      evtTitleInputRef.current?.focus();
      evtTitleInputRef.current?.select();
    }
  }, [editOption]);

  const handleAllDayCheckbox = () => {

  }

  return (
    <div className={styles.eventEditionContainer}>
        {editOption ? 
          <input 
            ref={evtTitleInputRef} 
            value={evtTitle} 
            onChange={e=>setEvtTitle(e.target.value)}
            onBlur={handleFinishTitleEdition}
            onKeyDown={handleFinishTitleEdition}
            className={styles.titleInput}
            placeholder='Add a title'
          />
          :
          <span onClick={()=>setEditOption(true)} className={styles.titleSpan}>{evtTitle.length === 0 ? 'Add a title' : evtTitle}</span>
        }

        <div className={styles.dateScheduleContainer}>
          <p>Scheduled to </p>
          <div>{evtInfos.date}</div>
        </div>

        <div className={styles.durationContainer}>
          <p>From</p>
          <div className={styles.timeContainer}>{evtInfos.time}</div>
          <p>To</p>
          <div className={styles.timeContainer}>{evtInfos.time}</div>
          <div className={styles.allDayContainer}>
            <input 
                type="checkbox" 
                id={'allDayCheckbox'}
                name={'allDayCheckbox'} 
                checked={false} className={styles.checkbox} 
                onChange={handleAllDayCheckbox}
            />
            <label 
                htmlFor={'allDayCheckbox'} 
                className={styles.checkmark}
            />
            <p>All day</p>
          </div>
        </div>

        <div className={styles.colorContainer}>
          <p>Color</p>
          <div></div>
        </div>

        <div className={styles.linkContainer}>
          <img src="/whiteIcons/link-icon.png" alt="link-icon" />
          <span>{evtInfos.link}</span>
        </div>

        <div className={styles.locationContainer}>
          <img src="/whiteIcons/location-icon.png" alt="location-icon" />
          <span>{evtInfos.address}</span>
        </div>

        <div className={styles.descriptionContainer}>
          <p>Description:</p>
          <span>{evtInfos.description}</span>
        </div>
    </div>
  )
}

export default EventEdition;