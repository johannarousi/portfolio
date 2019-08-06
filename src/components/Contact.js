import React from "react";
import purpleLeaves from "../images/purple-leaves.jpg";
import SocialMediaIcons from "./SocialMediaIcons";
import Footer from "./Footer";
const styles = {
  background: `url(${purpleLeaves}) no-repeat center center/cover`
};
export default function Contact() {
  return (
    <section id="contact" style={styles}>
      <h1>Contact me</h1>
      <h2>johanna.rousi@gmail.com</h2>
      <form className="form-labels">
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
      </form>
      <SocialMediaIcons />
      <Footer />
    </section>
  );
}
