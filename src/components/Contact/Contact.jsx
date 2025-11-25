import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          I’d love to hear from you! Fill out the form below or reach out directly via email.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        <div className="contact-buttons">
          <Link to="/" className="contact-btn home-btn">← Back to Home</Link>
          <Link to="/about" className="contact-btn about-btn">About Me →</Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;
