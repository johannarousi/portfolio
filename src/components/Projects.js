import React from "react";
// import purpleClouds from "../images/purple-clouds.jpg";
import finlary from "../images/projects/finlary.png";
import phonebook from "../images/projects/phonebook.png";
import hexcolors from "../images/projects/hexcolors.png";
import bmiCalculator from "../images/projects/bmi-calculator.png";
import countriesList from "../images/projects/countrieslist.png";
import SocialMediaIcons from "./SocialMediaIcons";

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
  return (
    <section id="projects">
      <div className="dark">
        <h1>Projects</h1>
        <div className="projects-div">
          <a
            href="https://finlary.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={stylesFinlary}>
              {/* <img src={finlary} alt="finlary-app" /> */}
            </div>
          </a>
          <a
            href="https://tranquil-plateau-40368.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={stylesPhonebook} />
          </a>

          <a
            href="http://htmlpreview.github.io/?https://github.com/johannarousi/Hexadecimal-Generator-JS-mini-project/blob/master/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={stylesHexcolors} />
          </a>
          <a
            href="http://htmlpreview.github.io/?https://github.com/johannarousi/Countries-Information-JS-mini-project/blob/master/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={stylesCountries} />
          </a>
          <a
            href="http://htmlpreview.github.io/?https://github.com/johannarousi/BMI-calculator-JS-mini-project/blob/master/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={stylesBMI} />
          </a>
        </div>
        <SocialMediaIcons />
      </div>
    </section>
  );
}
