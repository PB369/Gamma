import { useState } from "react";
import type { DateDetailsType } from "../../Pages/App/CalendarPage/CalendarPage";


type Props = {
    dateDetails: DateDetailsType | undefined;
    setShowDateDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const DateDetails = ({dateDetails, setShowDateDetails}: Props) => {
    const [expandEventDetails, setExpandEventDetails] = useState<boolean>(false);
    console.log(dateDetails);

    return (
        <div>
            <button onClick={()=>setShowDateDetails(false)}>X</button>
            <h3>{dateDetails?.month} {dateDetails?.day}, {dateDetails?.year}</h3>
            <p>Scheduled Activities</p>
            <div>
                {dateDetails?.events.map(event => {
                    return (
                        <div onClick={()=>setExpandEventDetails(prev => !prev)}>
                            <div>
                                <p>{event.title}</p>
                                <p>{event.time}</p>
                            </div>
                            <button>\/</button>
                            {expandEventDetails && (
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
                    )
                })}
            </div>
        </div>
    )
}

export default DateDetails;