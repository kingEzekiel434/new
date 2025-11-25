import React from "react";
import "./Hero.css";
import myPhoto from "../../../assets/myPhoto.jpg"; // 👈 place your image in src/assets/
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Ezekiel</span>
          </h1>
          <h2 className="subtitle">Front-End Web Developer</h2>
          <p className="description">
            I design and build responsive, interactive, and visually appealing websites that bring ideas to life on the web.
          </p>
           <Link to="/projects" className="cta-button">View My Work</Link>
           <Link to="/about" className="cta-button2">More About Me</Link>
           <Link to="/contact" className="cta-button3">Offer A
           Job</Link>
        </div>

        <div className="hero-image">
          <img src={myPhoto} alt="Ezekiel - Front-End Developer" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
