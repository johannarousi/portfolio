import React from "react";
import purpleLeaves from "../images/purple-leaves.jpg";
import SocialMediaIcons from "./SocialMediaIcons";
import Footer from "./Footer";

export default function Contact() {
  let styles;
  const isMobile = window.innerWidth <= 415;
  if (isMobile) {
    styles = {
      // background: "#7f8aaa"
      background: "transparent"
    };
  } else {
    styles = {
      background: `url(${purpleLeaves}) no-repeat center center/cover`
    };
  }

  return (
    <section id="contact" style={styles}>
      <div className="dark">
        <h1>Contact me</h1>
        <a href="mailto:johannarousi@gmail.com">johanna.rousi@gmail.com</a>
        {/* <form className="form-labels">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <br />
        <label htmlFor="message">Leave your message here:</label> <br />
        <textarea id="message" name="message" rows="12" />
        <br />
        <input id="submit" type="submit" value="Submit" />
      </form> */}
        <SocialMediaIcons />
        <Footer />
      </div>
    </section>
  );
}
