import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="d-flex flex-row justify-content-around align-items-center text-center flex-wrap py-4"
      style={{ backgroundColor: "#eef0ef", gap: "15px" }}
    >
      <div className="flex-gutter">
        This website is a final capstone project made by a group of 3 students
        who have graduated from Kable Academy's full-stack web development
        program in September 2022.
      </div>
      <div className="d-flex flex-column flex-person">
        <h5>Kayvon Samavati</h5>
        <div className="rounded-social-buttons my-2">
          <a
            className="social-button linkedin"
            href="https://www.linkedin.com/in/ksamavati/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="social-button github"
            href="https://github.com/ksamavati"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="social-button portfolio"
            href="https://www.ksamavati.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <i className="fas fa-briefcase"></i>
          </a>
        </div>
        <div className="d-flex flex-row justify-content-around">
          <span>LinkedIn</span>
          <span>GitHub</span>
          <span>Portfolio</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-person">
        <h5>Jonas Appau</h5>
        <div className="rounded-social-buttons my-2">
          <a
            className="social-button linkedin"
            href="https://www.linkedin.com/in/jonas-appau-8a7825237/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="social-button github"
            href="https://github.com/Jonasappau16"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="social-button portfolio"
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <i className="fas fa-briefcase"></i>
          </a>
        </div>
        <div className="d-flex flex-row justify-content-around">
          <span>LinkedIn</span>
          <span>GitHub</span>
          <span>Portfolio</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-person">
        <h5>Vera Opoku</h5>
        <div className="rounded-social-buttons my-2">
          <a
            className="social-button linkedin"
            href="https://www.linkedin.com/in/ksamavati/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="social-button github"
            href="https://github.com/ksamavati"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="social-button portfolio"
            href="https://www.ksamavati.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <i className="fas fa-briefcase"></i>
          </a>
        </div>
        <div className="d-flex flex-row justify-content-around">
          <span>LinkedIn</span>
          <span>GitHub</span>
          <span>Portfolio</span>
        </div>
      </div>
      <div className="flex-gutter">
        <h5 style={{ verticalAlign: "middle" }}>
          Learn more about us{" "}
          <span style={{ translate: "5px" }}>
            <i className="fas fa-angles-right"></i>
          </span>
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
