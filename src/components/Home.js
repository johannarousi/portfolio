import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import profilePicture from "../images/profile-picture-small.jpg";
export default function Home() {
  return (
    <section id="home">
      <div className="dark">
        <h1 className="home-title">Johanna Rousi</h1>
        <p>
          I am a finnish web developer who lives in Helsinki. I am also a
          professional musician, a cellist, and I play in a string quartet
          called Lumo Ensemble.
          {/* <a
            href="https://www.lumoensemble.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lumo Ensemble.
          </a> */}
        </p>
        <div className="img-container">
          <img className="profile-image" src={profilePicture} alt="profile" />
        </div>
      </div>
      <SocialMediaIcons />
    </section>
  );
}
