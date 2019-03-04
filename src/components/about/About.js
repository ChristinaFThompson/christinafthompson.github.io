import React, { Component } from "react";
import "./about.css";

export class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="about-title">
          <h1> HELLO.</h1>
        </div>
        <div className="profile">
          <p>
            {" "}
            My name is Christina and I am a Software Engineer with a keen eye
            for detail and a passion for mission-driven web development. My
            background in community organizing, and advocacy via the non-profit
            sector, serves as a catalyst for the holistic and people-centered
            approach I bring to problem solving. Often taking the road less
            traveled, I find solutions in common and (not so common) crevices of
            the web.
          </p>
          {/* <p>My aestic for clean, thoughtful and accessible web devlopement creates a clean slate for client-specific needs</p> */}
          <br />
          <p>
            When I am not working with clients helping them to increase
            organizational capacity and bringing their ideas to code, you can
            find me traveling, serving my commnunity, eating amazing food, and
            learning new langauges/frameworks.{" "}
          </p>
        </div>
        <div className="skills">
          <div className="skills-title">
            <h1>Fluency..</h1>
          </div>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Python/Django</li>
            <li>PostgreSQL</li>
            <li>Mongoose/MongoDB</li>
          </ul>
        </div>
        {/*  
        <div className="quote">
          <p>
            " When I dare to be powerful - to use my strength in the service of
            my vision, then it becomes less and less important whether I am
            afraid."
          </p>
          <br />
          <p>- Audre Lorde </p>
        </div>
        */}
      </div>
    );
  }
}

export default About;
