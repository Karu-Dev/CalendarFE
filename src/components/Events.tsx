
import React, { useEffect, useState } from 'react';
import DayModal from './DayModal';

const Events: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const [currentInfo, setCurrentInfo] = useState(null);

    useEffect(()=>{
        const userId = localStorage.getItem("userId")
        fetch(`http://localhost:4000/getCalendar?userId=${userId}`).then(it=>{
            it.json().then(data=>{
                setEvents(data)
                console.log(data);
            })
        })

    },[])
    
      const handleClose = () : void => {
        setOpen(false);
      };
    
  return (
    <div className="events">
        <div className="back" onClick={()=>window.location.href = "/"}>Back</div>
      <DayModal info={currentInfo} open={open} handleClose={handleClose} />

      {events.map((it,idx)=>(<div className='event' onClick={()=>{setCurrentInfo(it); setOpen(true) }} key={idx}>{(it as any).summary}</div>))}

    </div>
  );
};

export default Events;