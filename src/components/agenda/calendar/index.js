import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import '../style.css'

const localizer = momentLocalizer(moment)


const Calendario = (props) => {

    const handleEventSelection = (e) => {
        let confirmation = window.confirm('Excluir evento?');
        if(confirmation === true) {
            props.removeEvent(e.id)
        }
    };
    
    return(
        <div className='calendar'>
            <Calendar
                localizer={localizer}
                events={props.events}
                popup
                onSelectEvent={handleEventSelection}
                defaultView = 'agenda'
                style={{ height: 600 }}
            />
        </div>
    )
}

export default Calendario;