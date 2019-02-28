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

        <div className="quote">
          <p>
            "When I dare to be powerful - to use my strength in the service of
            my vision, then it becomes less and less important whether I am
            afraid."
            <span>- Audre Lorde</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
