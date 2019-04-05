import React, { Component } from "react";
import "./about.css";

export class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="about-title">
          <h1> about</h1>
        </div>

        <div className="about-container">
          <div className="profile">
            <p>
              {" "}
              I'm a Racial Justice advocate and Software Engineer with a keen
              eye for detail and a passion for mission-driven web development.
              My background in community organizing, and advocacy via the
              non-profit sector, serves as a catalyst for the holistic and
              people-centered approach I bring to problem solving. Often taking
              the road less traveled, I find solutions in common and (not so
              common) crevices of the web.
            </p>

            <br />
            <p>
              When I am not working with clients helping them to increase
              organizational capacity and bringing their ideas to code, you can
              find me traveling, eating amazing food, and learning new
              langauges/frameworks.{" "}
            </p>
            <br />
            <a
              href="https://drive.google.com/file/d/1s40LC7kBqb7vcGDoAjxIjFTgObllAmSc/view?usp=sharing"
              download
            >
              [ Resume ]{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
