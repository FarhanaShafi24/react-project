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

import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import EventSection from "./components/EventSection";
import Footer from "./components/Footer";
function App(){
  return(
    <div>
      <Navbar />
      <main id="home">

        <Hero/>
        <EventSection/>
      </main>
       <Footer/>
    </div>
  );
}
export default App;