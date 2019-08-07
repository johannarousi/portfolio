import React from "react";
import kanervat from "../images/kanervat.jpg";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Skills() {
  const isMobile = window.innerWidth <= 415;
  let styles;
  if (isMobile) {
    styles = {
      background: "transparent"
    };
  } else {
    styles = {
      background: `url(${kanervat}) no-repeat center center/cover`
    };
  }
  return (
    <section id="skills" style={styles}>
      <div className="dark">
        <h1>Skills</h1>
        <div className="skills-and-education">
          <div className="skills-language-div">
            <div className="skills-div">
              <h2>Technologies</h2>
              <div className="html-div">HTML</div>
              <div className="css-div">CSS</div>
              <div className="javascript-div">JavaScript</div>
              <div className="react-div">React</div>
              <div className="redux-div">Redux</div>
              <div className="nodejs-div">Node.js</div>
              <div className="mongodb-div">MongoDB</div>
            </div>
            <div className="languages-div">
              <h2>Languages</h2>
              <div className="finnish">Finnish</div>
              <div className="english">English</div>
              <div className="german">German</div>
              <div className="swedish">Swedish</div>
            </div>
          </div>
          <div className="education">
            <h2>Education</h2>
            <table>
              <tbody>
                <tr>
                  <td>Sibelius-Academy</td>
                  <td>Master of Music</td>
                </tr>
                <tr>
                  <td>
                    Musik und Kunst
                    <br />
                    Privatuniversität
                    <br />
                    der Stadt Wien
                  </td>
                  <td>Master of Arts</td>
                </tr>
                <tr>
                  <td>Integrify</td>
                  <td>Modern Web Development</td>
                </tr>
                <tr>
                  <td>FreeCodeCamp</td>
                  <td>
                    Responsive Web Design
                    <br />
                    Certification
                    <br />
                    JavaScript Algorithms
                    <br />
                    and Data Structures
                    <br />
                    Certification
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <SocialMediaIcons />
    </section>
  );
}
