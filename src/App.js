import React from "react";
import "./App.css";
import purpleClouds from "./images/darker-clouds-small.jpg";

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
  let styles;
  const isMobile = window.innerWidth <= 415;
  if (isMobile) {
    styles = {
      // background: "#7f8aaa"
      background: `url(${purpleClouds}) no-repeat center center/cover`
    };
  } else {
    styles = {
      background: `url(${purpleClouds}) no-repeat center center/cover`,
      backgroundAttachment: "fixed"
    };
  }

  return (
    <>
      <div className="app-container" style={styles}>
        {/* <FontAwesomeIcon icon="check-square" />
      Favorite Drink:{" "}
      <FontAwesomeIcon icon="instagram" color="white" size="4x" /> */}
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
