import React from "react";
import "./App.css";
import purpleClouds from "./images/darker-clouds.jpg";

// import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const styles = {
  background: `url(${purpleClouds}) no-repeat center center/cover`
};
const stylesDark = {
  background: "rgba(0,0,0,0.0)"
};

// library.add(faCoffee, faCheckSquare, faInstagram);

function App() {
  return (
    <div className="container" style={styles}>
      <div style={stylesDark}>
        {/* <FontAwesomeIcon icon="check-square" />
      Favorite Drink:{" "}
      <FontAwesomeIcon icon="instagram" color="white" size="4x" /> */}
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
