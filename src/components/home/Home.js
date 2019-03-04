import React, { Component } from "react";
import "./home.css";

export class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="slogan">
          <span>Ideate.</span>
          <span>Develop.</span>
          <span>Impact.</span>
        </div>

        <div>
          <a
            className="fas fa-address-card"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:thomp.christina@gmail.com"
          />
        </div>
      </div>
    );
  }
}

export default Home;
