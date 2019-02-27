import React, { Component } from "react";
import "./work.css";
import trip from "./trip.png";

class Work extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Work.</h1>
        </div>

        <div className="work-container">
          <div className="project">
            <h3> Trippin'</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>[Github] [Live]</p>{" "}
          </div>
          <div className="project">
            <h3> Trippin'</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>[Github] [Live]</p>{" "}
          </div>
          <div className="project">
            <h3> Trippin'</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>[Github] [Live]</p>{" "}
          </div>
          <div className="project">
            <h3> Trippin'</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>[Github] [Live]</p>{" "}
          </div>

          {/* 
          <div className="projects">
            <img src={trip} alt="car" />
          </div>
          <div className="projects">
            <img src={trip} alt="car" />
          </div>
          <div className="projects">
            <img src={trip} alt="car" />
          </div>
          <div className="projects">
            <img src={trip} alt="car" />
          </div>
        */}
        </div>
      </div>
    );
  }
}

export default Work;
