import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i4zutpj",
        "template_v68v03l",
        form.current,
        "c6H8DtolSceuBtbY1"
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again later.");
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          I’d love to hear from you! Fill out the form below or reach out directly via email.
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
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
