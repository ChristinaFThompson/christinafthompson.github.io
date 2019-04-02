import React, { Component } from "react";
import "./home.css";

export class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="slogan">
          <span>Ideate</span>
          <span>Develop</span>
          <span>Impact</span>
          <div className="home-links">
            <a
              className="fas fa-address-card"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:thomp.christina@gmail.com"
            />
            <a
              className="fab fa-twitter-square"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ChrissyFCodes"
            />
            <a
              className="fab fa-github-square"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ChristinaFThompson"
            />
            <a
              className="fab fa-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/christinafthompson/"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
