import Navbar2 from "./compenent/Navbar2.js";
import Home from "./compenent/Home.js";
import Header from "./compenent/Header.js";
import About from "./compenent/About.js";
import Skills from "./compenent/Skills/Skills.js";
import Work from "./compenent/Work/Work.js";
import Experience from "./compenent/Experience/Experience.js";
function App() {
  return (
    <div className="App">
      <Navbar2 />
      <Header />
      <About />
      <Skills />
      <Work />
      <Experience />
      {/* <Home /> */}
    </div>
  );
}

export default App;
