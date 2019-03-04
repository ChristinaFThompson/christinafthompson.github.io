import React, { Component } from "react";
import "./work.css";

class Work extends Component {
  render() {
    return (
      <div className="container">
        <div className="work-title" />

        <div className="work-container">
          <div className="project">
            <a
              className="links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ChristinaFThompson/Trippin-Frontend"
            >
              <span className="project-title"> Trippin'</span>
              <p>
                Travel journal web application using geo location to return
                local restaurants to users, allowing them to save thier current
                location creating a travel log.
              </p>{" "}
              <br />
              <p className="tech">
                Javascript, React, Python, Django, Yelp API
              </p>
            </a>{" "}
          </div>
          <div className="project grow">
            <div>
              <a
                className="links"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ChristinaFThompson/GiveBlack"
              >
                <span className="project-title"> GiveBlack</span>
                <p>
                  Donation aggregation tool. Add your favorite charitable
                  organizations to your dashboard for one-stop-shop giving.
                </p>
                <br />
                <p className="tech">Javascript, Express, NodeJS, CSS</p>
              </a>{" "}
            </div>
          </div>
          <div className="project">
            <div>
              <a
                className="links"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ChristinaFThompson/roomKind"
              >
                <span className="project-title"> RoomKind</span>
                <p>
                  {" "}
                  Airbnb style web application for homeless shelters and
                  everyday people to list their spare beds for those in need.
                </p>{" "}
                <br />
                <p className="tech">Javascript, Express, React, MongoDB</p>{" "}
                <br />{" "}
              </a>{" "}
            </div>
          </div>
          <div className="project">
            <div>
              <a
                className="links"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ChristinaFThompson/Jeopardy-project1"
              >
                <span className="project-title"> Jeopardy</span>
                <p>Socio-political online version of the tv game show.</p>
                <br />
                <p className="tech">HTML, CSS</p>
              </a>{" "}
            </div>
            <div>
              <a
                className="fab fa-github"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/christinafthompson"
              />{" "}
            </div>
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
