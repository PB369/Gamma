import { useEffect, useState } from "react";
import type { DateDetailsType } from "../../Pages/App/CalendarPage/CalendarPage";


type Props = {
    dateDetails: DateDetailsType | undefined;
    setShowDateDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const DateDetails = ({dateDetails, setShowDateDetails}: Props) => {
    const [expandEventIndex, setExpandEventIndex] = useState<number | undefined>(undefined);

    return (
        <div>
            <button onClick={()=>setShowDateDetails(false)}>X</button>
            <h3>{dateDetails?.month} {dateDetails?.day}, {dateDetails?.year}</h3>
            <p>Scheduled Activities</p>
            <div>
                {dateDetails && dateDetails.events.length > 0 ?
                dateDetails?.events.map((event, index) => {
                    const mustExpand = expandEventIndex === index 
                    return (
                        <div onClick={()=>setExpandEventIndex(mustExpand ? undefined : index)}>
                            <div>
                                <p>{event.title}</p>
                                <p>{event.time}</p>
                            </div>
                            <button>\/</button>
                            {mustExpand && (
                                <div>
                                    <span>
                                        <img src="" alt="" />
                                        <p>{event.url}</p>
                                    </span>
                                    <span>
                                        <img src="" alt="" />
                                        <p>{event.address}</p>
                                    </span>
                                    <span>
                                        <img src="" alt="" />
                                        <p>{event.description}</p>
                                    </span>
                                </div>
                            )}
                        </div>
                    )})
                    :
                    (<p>There is no scheduled activities yet.</p>)
                }
            </div>
        </div>
    )
}

export default DateDetails;