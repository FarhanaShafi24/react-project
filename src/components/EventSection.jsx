// import EventCard from "./EventCard";

// function EventSection({ events }) {
//   return (
//     <section id="events" className="event-section">
//       <div className="section-heading">
//         <div>
//           <p className="section-label">
//             Upcoming Activities
//           </p>

//           <h2>Explore Campus Events</h2>
//         </div>

//         <p>{events.length} events available</p>
//       </div>

//       <div className="event-grid">
//         {events.map(function (event) {
//           return (
//             <EventCard
//               key={event.id}
//               id={event.id}
//               title={event.title}
//               category={event.category}
//               date={event.date}
//               time={event.time}
//               location={event.location}
//               description={event.description}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default EventSection;

import EventCard from "./EventCard";
import { initialEvents } from "../Data/events";

function EventSection() {
  return (
    <section className="events-section">

      <div className="section-heading">
        <div>
          <p className="section-label">EVENTS</p>
          <h2>Explore Campus Events</h2>
        </div>

        <p>Discover what's happening on campus</p>
      </div>

      <div className="event-grid">
        {initialEvents.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            date={event.date}
            time={event.time}
            location={event.location}
            category={event.category}
            description={event.description}
          />
        ))}
      </div>

    </section>
  );
}

export default EventSection;