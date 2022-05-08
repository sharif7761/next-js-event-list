import EventItem from "./EventItem";

function EventList(props){
    const {events} = props

    return (
        <ul>
            {events.map(event => (
              <EventItem event={event} key={event.id} /> 
            ))}
        </ul>
    )
}

export default EventList;