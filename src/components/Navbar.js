import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-button">
        <label htmlFor="nav-check">
          <span />
          <span />
          <span />
        </label>
      </div>
      <input type="checkbox" id="nav-check" />
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
    // <div className="navbar">
    //   <ul>
    //     <li>
    //       <a href="#home">Home</a>
    //     </li>
    //     <li>
    //       <a href="#skills">Skills</a>
    //     </li>
    //     <li>
    //       <a href="#projects">Projects</a>
    //     </li>
    //     <li>
    //       <a href="#contact">Contact</a>
    //     </li>
    //   </ul>
    // </div>
  );
}
