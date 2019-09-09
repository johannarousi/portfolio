import React, { useState } from "react";

export default function Navbar() {
  const [clickState, setClickState] = useState(false);

  const onClick = () => {
    setClickState(!clickState);
  };

  return (
    <div className="navbar">
      <div className="navbar-button">
        <label
          htmlFor="nav-check"
          onClick={onClick}
          className={clickState ? "change" : null}
        >
          <span className="span1" />
          <span className="span2" />
          <span className="span3" />
        </label>
      </div>

      <div className="navbar-links-desktop">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      {clickState ? (
        <div className="navbar-links">
          <a onClick={onClick} href="#home">
            Home
          </a>
          <a onClick={onClick} href="#skills">
            Skills
          </a>
          <a onClick={onClick} href="#projects">
            Projects
          </a>
          <a onClick={onClick} href="#contact">
            Contact
          </a>
        </div>
      ) : null}
    </div>
  );
}
