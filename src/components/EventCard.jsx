// // function EventCard(
// //     {title,date,time,
// //         location,
// //         category,description,}
// // ){
// //     return(
// //         <article className="even-card">
// //             <p className="event-category">
// //                 {category}
// //             </p>
// //             <h3>{title}</h3>
// //             <p className="event-description">
// //                 {description}
// //             </p>
// //             <div className="event-details">
// //                 <p>
// //                     <strong>Date:</strong>{date}
// //                 </p>
// //                 <p>
// //                     <strong>Time:</strong>{time}
// //                 </p>
// //                 <p>
// //                     <strong>Location:</strong>{location}
// //                 </p>
// //             </div>
// //             <button type="button">View Details</button>

// //         </article>
// //     );
// // }
// // export default EventCard;
// import {Link} from "react-router";
// function EventCard({
//   id,
//   title,
//   date,
//   time,
//   location,
//   category,
//   description,
// }){
//   return (
//     <article className="event-card">
//       <p className="event-category">
//         {category}
//       </p>
//       <h3>{title}</h3>
//       <p className="event-description">
//         {description}
//       </p>
//       <div className="event-details">
//         <p>
//           <strong>Date:</strong>{date}
//         </p>
//         <p>
//           <strong>Time:</strong>{time}
//         </p>
//         <p>
//           <strong>Location:</strong>{location}
//         </p>
//       </div>
//       <Link className="details-button"
//             to={'/events/${id}'}>
//       View Details
//       </Link>

//     </article>
//   );
// }
// export default EventCard;


import EventCard from "./EventCard";
import { initialEvents } from "../Data/events";

function EventSection() {
  return (
    <section id="events" className="events-section">
      <div className="section-heading">
        <div>
          <p className="section-label">
            Upcoming Activities
          </p>

          <h2>Explore Campus Events</h2>
        </div>

        <p>{events.length} events available</p>
      </div>

      <div className="event-grid">
        {events.map(function (event) {
          return (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              category={event.category}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
            />
          );
        })}
      </div>
    </section>
  );
}

export default EventSection;