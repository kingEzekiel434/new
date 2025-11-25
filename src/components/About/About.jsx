import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import myPhoto from "../../assets/myPhoto.jpg"; // 👈 update your image path if needed

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={myPhoto} alt="Ezekiel Emmanuel - Front-End Developer" />
        </div>

        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            Hi, I'm <span className="highlight">Ezekiel Emmanuel</span> — a
            passionate <strong>Front-End Web Developer</strong> dedicated to
            creating visually stunning, responsive, and user-friendly websites.
            I specialize in <strong>React.js</strong>, modern web design, and
            interactive UI animations that make the web more alive and engaging.
          </p>

          <p className="about-text">
            My goal is to transform creative ideas into digital realities —
            combining design, logic, and smooth interactions to craft unique web
            experiences that stand out.
          </p>

          <div className="about-buttons">
            <Link to="/" className="about-btn home-btn">
              ← Back to Home
            </Link>
            <Link to="/contact" className="about-btn contact-btn">
              Contact Me →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
