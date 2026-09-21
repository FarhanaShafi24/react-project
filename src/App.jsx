// function App() {
//   return (
//     <div>
//       <h1>Hello Firends</h1>
//       <p>Chai Peelo</p>
//     </div>
//   );
// }

// export default App;
/*import "./App.css";
function App(){
  const tarinerName="Nirmal";
  const trainingDay=3;
  return(
    <main className="app">
      <section className="welcome-card">
      <p className="day-label">React Day {trainingDay}</p>
      <h1 className="title">College Course Explorer </h1>
      <p>Trainer:{tarinerName}</p>
      <p>React Learning Project</p>
      <p>Used React,JSX,componets,CSS</p>
      </section>   
    </main>       
  );
}
export default App;*/

// import "./App.css";
// import Navbar from "./components/navbar";
// import Hero from "./components/Hero";
// import EventSection from "./components/EventSection";
// import Footer from "./components/Footer";
// import EventCard from "./components/EventCard";
// function App(){
//   return(
//     <div>
//       <Navbar />
//       <main id="home">

//         <Hero/>
//         <EventSection/>
//       </main>
//        <Footer/>
//     </div>
//   );
// }
// export default App;

// import { useState } from "react";
// import { Routes, Route } from "react-router";
// import "./App.css";
// import Navbar from "./components/navbar";
// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";
// import EventsPage from "./pages/EventsPage";
// import AboutPage from "./pages/AboutPage";
// import { initialEvents } from "./Data/events";

// function App() {
//   const [events, setEvents] = useState(initialEvents);

//   function handleAddEvent(newEvent) {
//     setEvents([...events, newEvent]);
//   }

//   return (
//     <div>
//       <Navbar />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <HomePage events={events} onAddEvent={handleAddEvent} />
//           }
//         />

//         <Route path="/events" element={<EventsPage events={events} />} />

//         <Route path="/about" element={<AboutPage />} />
//       </Routes>

//       <Footer />
//     </div>
//   );
// }

// export default App;



//  

// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";

// import "./App.css";

// import Navbar from "./components/navbar";
// import Footer from "./components/Footer";

// import HomePage from "./pages/HomePage";
// import EventsPage from "./pages/EventsPage";
// import EventDetailsPage from "./pages/EventDetailPages";
// import AboutPage from "./pages/AboutPage";

// import { initialEvents } from "./Data/events";

// function App() {
//   const [events, setEvents] = useState(initialEvents);

//   function handleAddEvent(newEvent) {
//     setEvents((currentEvents) => [
//       ...currentEvents,
//       newEvent,
//     ]);
//   }

//   return (
//     <div>
//       <Navbar />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <HomePage
//               events={events}
//               onAddEvent={handleAddEvent}
//             />
//           }
//         />

//         <Route
//           path="/events"
//           element={<EventsPage events={events} />}
//         />

//         <Route
//           path="/events/:eventId"
//           element={<EventDetailsPage events={events} />}
//         />

//         <Route
//           path="/about"
//           element={<AboutPage />}
//         />
//       </Routes>

//       <Footer />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { Routes, Route } from "react-router";

import "./App.css";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailPages";
import AboutPage from "./pages/AboutPage";

import { initialEvents } from "./Data/events";

function App() {
  const [events, setEvents] = useState(initialEvents);

  function handleAddEvent(newEvent) {
    setEvents([...events, newEvent]);
  }

  function handleDeleteEvent(eventId) {
    const updatedEvents = events.filter(function (event) {
      return event.id !== eventId;
    });

    setEvents(updatedEvents);
  }

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              events={events}
              onAddEvent={handleAddEvent}
              onDeleteEvent={handleDeleteEvent}
            />
          }
        />

        <Route
          path="/events"
          element={
            <EventsPage
              events={events}
              onDeleteEvent={handleDeleteEvent}
            />
          }
        />

        <Route
          path="/events/:eventId"
          element={
            <EventDetailsPage
              events={events}
            />
          }
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;