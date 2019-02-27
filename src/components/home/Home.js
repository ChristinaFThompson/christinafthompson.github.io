import React, { Component } from "react";
import "./home.css";

export class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="slogan">
          <p>Ideate.</p>
          <p>Develop.</p>
          <p>Impact.</p>
        </div>
        <div className="quote">
          <p>
            When I dare to be powerful - to use my strength in the service of my
            vision, then it becomes less and less important whether I am afraid.
            - Audre Lorde
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
