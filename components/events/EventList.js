import EventItem from "./EventItem";
import classes from './EventList.module.css';

function EventList(props){
    const {events} = props

    return (
        <ul className={classes.list}>
            {events.map(event => (
              <EventItem event={event} key={event.id} /> 
            ))}
        </ul>
    )
}

export default EventList;