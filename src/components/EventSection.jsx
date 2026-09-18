function EventSection() {
  return (
    <section id="events" className="events-section">
      <p className="section-label">Upcoming Activities</p>

      <h2>Explore Campus Events</h2>

      <div className="event-grid">
        <article className="event-card">
          <p className="event-category">Technology</p>

          <h3>MERN Stack Workshop</h3>

          <p>
            Learn the basics of MongoDB, Express, React, and Node.js through a
            practical workshop.
          </p>

          <p>
            <strong>Date:</strong> 25 September 2026
          </p>

          <p>
            <strong>Location:</strong> Computer Lab 1
          </p>

          <button type="button">View Details</button>
        </article>

        <article className="event-card">
          <p className="event-category">Technology</p>

          <h3>College Hackathon</h3>

          <p>
            Form a team, solve a real problem, and present your solution to
            mentors.
          </p>

          <p>
            <strong>Date:</strong> 28 September 2026
          </p>

          <p>
            <strong>Location:</strong> Main Auditorium
          </p>

          <button type="button">View Details</button>
        </article>

        <article className="event-card">
          <p className="event-category">Sports</p>

          <h3>Campus Football Trials</h3>

          <p>
            Join football team selection trials. Bring your college ID card.
          </p>

          <p>
            <strong>Date:</strong> 2 October 2026
          </p>

          <p>
            <strong>Location:</strong> College Ground
          </p>

          <button type="button">View Details</button>
        </article>
      </div>
    </section>
  );
}

export default EventSection;