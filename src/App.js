import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import "./App.css";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

function App(props) {
  return (
    <div className="App">
      <div>
        <Route path="/home">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </div>
  );
}

export default App;
