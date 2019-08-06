import React from "react";
import "./App.css";
// import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// library.add(faCoffee, faCheckSquare, faInstagram);

function App() {
  return (
    <div className="container">
      {/* <FontAwesomeIcon icon="check-square" />
      Favorite Drink:{" "}
      <FontAwesomeIcon icon="instagram" color="white" size="4x" /> */}
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
