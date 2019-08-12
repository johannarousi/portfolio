import React, { useState } from "react";
// import purpleClouds from "../images/purple-clouds.jpg";
import finlary from "../images/projects/finlary.png";
import phonebook from "../images/projects/phonebook.png";
import hexcolors from "../images/projects/hexcolors.png";
import bmiCalculator from "../images/projects/bmi-calculator.png";
import countriesList from "../images/projects/countrieslist.png";
import SocialMediaIcons from "./SocialMediaIcons";
import Project from "./Project";

const stylesFinlary = {
  background: `url(${finlary}) no-repeat center center/cover`
};
const stylesPhonebook = {
  background: `url(${phonebook}) no-repeat center center/cover`
};
const stylesHexcolors = {
  background: `url(${hexcolors}) no-repeat center center/cover`
};
const stylesCountries = {
  background: `url(${countriesList}) no-repeat center center/cover`
};
const stylesBMI = {
  background: `url(${bmiCalculator}) no-repeat center center/cover`
};
export default function Projects() {
  // const isMobile = window.innerWidth <= 415;
  // let styles;
  // if (isMobile) {
  //   styles = {
  //     background: "transparent"
  //   };
  // } else {
  //   styles = {
  //     background: `url(${purpleClouds}) no-repeat center center/cover`
  //   };
  // }
  const [isHoveringFinlary, setHoverFinlary] = useState(false);
  const [isHoveringPhonebook, setHoverPhonebook] = useState(false);
  const [isHoveringHexcolors, setHoverHexcolors] = useState(false);
  const [isHoveringCountries, setHoverCountries] = useState(false);
  const [isHoveringBMI, setHoverBMI] = useState(false);

  const handleMouseOver = e => {
    let name = e.target.className;
    if (name === "finlary project-div") setHoverFinlary(true);
    if (name === "phonebook project-div") setHoverPhonebook(true);
    if (name === "hexcolors project-div") setHoverHexcolors(true);
    if (name === "countries project-div") setHoverCountries(true);
    if (name === "bmi project-div") setHoverBMI(true);
  };
  const handleMouseLeave = e => {
    let name = e.target.className;
    if (name !== "finlary project-div") setHoverFinlary(false);
    if (name !== "phonebook project-div") setHoverPhonebook(false);
    if (name !== "hexcolors project-div") setHoverHexcolors(false);
    if (name !== "countries project-div") setHoverCountries(false);
    if (name !== "bmi project-div") setHoverBMI(false);

    setHoverHexcolors(false);
    setHoverCountries(false);
    setHoverBMI(false);
  };
  return (
    <section id="projects">
      <div className="dark">
        <h1>Projects</h1>
        <div className="projects-div">
          {/* <Project
            name="Finlary"
            style={stylesFinlary}
            handleMouseOver={handleMouseOver}
            handleMouseLeave={handleMouseLeave}
            className="finlary project-div"
            isHovering={isHoveringFinlary}
            link="https://finlary.netlify.com/"
          /> */}
          <div
            style={stylesFinlary}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className="finlary project-div"
          >
            {isHoveringFinlary && (
              <div className="hover-project">
                <h2>Finlary</h2>
                <a
                  href="https://finlary.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>

                <a
                  href="https://github.com/johannarousi/demo-day"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code in Github
                </a>
              </div>
            )}
          </div>
          <div
            style={stylesPhonebook}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className="phonebook project-div"
          >
            {isHoveringPhonebook && (
              <div className="hover-project">
                <h2>Phonebook</h2>
                <a
                  href="https://tranquil-plateau-40368.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/johannarousi/fullstack-open-puhelinluettelon-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code in Github
                </a>
              </div>
            )}
          </div>
          <div
            style={stylesHexcolors}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className="hexcolors project-div"
          >
            {isHoveringHexcolors && (
              <div className="hover-project">
                <h2>Hexadecimal Color Generator</h2>
                <a
                  href="http://htmlpreview.github.io/?https://github.com/johannarousi/Hexadecimal-Generator-JS-mini-project/blob/master/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/johannarousi/Hexadecimal-Generator-JS-mini-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code in Github
                </a>
              </div>
            )}
          </div>
          <div
            style={stylesCountries}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className="countries project-div"
          >
            {isHoveringCountries && (
              <div className="hover-project">
                <h2>Countries Search List</h2>
                <a
                  href="http://htmlpreview.github.io/?https://github.com/johannarousi/Countries-Information-JS-mini-project/blob/master/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/johannarousi/Countries-Information-JS-mini-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code in Github
                </a>
              </div>
            )}
          </div>
          <div
            style={stylesBMI}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className="bmi project-div"
          >
            {isHoveringBMI && (
              <div className="hover-project">
                <h2>BMI Calculator</h2>
                <a
                  href="http://htmlpreview.github.io/?https://github.com/johannarousi/BMI-calculator-JS-mini-project/blob/master/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/johannarousi/BMI-calculator-JS-mini-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code in Github
                </a>
              </div>
            )}
          </div>
        </div>
        <SocialMediaIcons />
      </div>
    </section>
  );
}
