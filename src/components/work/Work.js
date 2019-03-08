import React, { Component } from "react";
import "./work.css";
import car from "./car.jpg";
import fist from "./fist.png";
import jeop from "./jeop.png";
import rk from "./rk.png";

class Work extends Component {
  render() {
    return (
      <div className="container">
        <div className="work-title">Work.</div>
        <div className="project-container">
          <div className="project">
            <h1 className="project-title"> Trippin'</h1>
            <img src={car} alt="fireSpot" />
            <p className="tech">Javascript, React, Python, Django, Yelp API</p>
          </div>
          <div className="project">
            <div>
              <h1 className="project-title"> GiveBlack</h1>

              <img src={fist} alt="fireSpot" />
              <p className="tech">Javascript, Express, NodeJS, CSS</p>
            </div>
          </div>
          <div className="project">
            <div>
              <h1 className="project-title"> RoomKind</h1>
              <img src={rk} alt="fireSpot" />
              <p className="tech">
                Javascript, Express, React, MongoDB
              </p> <br />{" "}
            </div>
          </div>
          <div className="project">
            <div>
              <h1 className="project-title"> Jeopardy</h1>

              <img src={jeop} alt="fireSpot" />
              <p className="tech">HTML, CSS</p>
            </div>
            {/*  
            <div>
              <a
                className="fab fa-github"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/christinafthompson"
              />{" "}
            </div>
            */}
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
