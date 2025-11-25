import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";

function Project() {
  return (
    <section className="project-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">
        A showcase of my recent works and creative web projects
      </p>

      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-card">
          <img
            src="https://cipmnigeria.org.ng/wp-content/uploads/2018/11/HiRes-17-768x461.jpg"
            alt="Project 1"
            className="project-image"
          />
          <div className="project-content">
            <h3 className="project-title">Project One</h3>
            <p className="project-description">
              A responsive React web app that adapts to all screen sizes and provides a smooth user experience.
            </p>
            <a href="#" className="project-link">
              View Project →
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673636348357?e=2147483647&v=beta&t=PSpU4mZFpMBmE14oWDnDwf5a8_4rdQUiCUKF_U-x584"
            alt="Project 2"
            className="project-image"
          />
          <div className="project-content">
            <h3 className="project-title">Project Two</h3>
            <p className="project-description">
              A modern, interactive website built with cutting-edge web technologies and animations.
            </p>
            <a href="#" className="project-link">
              View Project →
            </a>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="back-home-container">
        <Link to="/" className="back-home-button">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}

export default Project;
