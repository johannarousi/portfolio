import React, { useState } from "react";

export default function Navbar() {
  const [clickState, setClickState] = useState(false);

  const onClick = () => {
    setClickState(!clickState);
  };
  console.log(clickState);
  return (
    <div className="navbar">
      <div className="navbar-button">
        <label
          htmlFor="nav-check"
          onClick={() => onClick}
          className={clickState ? "change" : null}
        >
          <span className="span1" />
          <span className="span2" />
          <span className="span3" />
        </label>
      </div>
      <input type="checkbox" id="nav-check" onClick={onClick} />
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
