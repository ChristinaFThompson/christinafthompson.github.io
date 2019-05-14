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
        <div className="work-title">Work</div>
        <div className="project-container">
          <div className="project">
            <h1 className="project-title"> Trippin'</h1>
            <p className="caveat">* In Development</p>
            <p className="blurb">
              Travel journal web application allowing uses to save thier current
              restaurant based on their longitute & latitude creating a travel
              log of experiences.
            </p>

            <img src={car} alt="yellowCar" />
            <p className="tech">
              React | Django REST framework | Yelp API | PostgreSQL
            </p>
            <div className="links">
              {" "}
              <a
                className="fab fa-github"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/christinafthompson"
              />{" "}
              <a
                className="fas fa-rocket"
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtu.be/56WbyU8ZS4I"
              />{" "}
            </div>
          </div>
          <div className="project">
            <div>
              <h1 className="project-title"> GiveBlack</h1>
              <p className="caveat">* In Development</p>
              <p className="blurb">
                Web application allowing users to add multiple organizations to
                their donation dashboard to aggregate doantion giving.
              </p>
              <img src={fist} alt="Fist" />
              <p className="tech">
                Express.js | Node.js | MongoDB | HTML5/CSS3
              </p>
              <div className="links">
                {" "}
                <a
                  className="fab fa-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ChristinaFThompson/GiveBlack"
                />{" "}
                <a
                  className="fas fa-rocket"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://giveblack-project2.herokuapp.com/"
                />{" "}
              </div>
            </div>
          </div>
          <div className="project">
            <div>
              <h1 className="project-title"> RoomKind</h1>
              <p className="caveat">* Team Built</p>
              <p className="blurb">
                AirBnB style web application allowing homeless shelters and
                everyday home owners to list available empty beds for the
                homeless to reserve.
              </p>
              <img src={rk} alt="Shelters" />
              <p className="tech">Express.js | React | MongoDB</p>
              <div className="links">
                {" "}
                <a
                  className="fab fa-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ChristinaFThompson/roomKind"
                />{" "}
                <a
                  className="fas fa-rocket"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://project3-roomkind.surge.sh/"
                />{" "}
              </div>
              <br />{" "}
            </div>
          </div>
          <div className="project">
            <div>
              <h1 className="project-title"> Jeopardy</h1>
              <p className="blurb">
                Socio-political, myth-debunking online version of the tv game
                show Jeopardy.Answer with "who/what is" to get the questions
                correctly!
              </p>
              <img src={jeop} alt="Jeopardy" />
              <p className="tech">HTML | CSS</p>
              <div className="links">
                {" "}
                <a
                  className="fab fa-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ChristinaFThompson/Jeopardy-project1"
                />{" "}
                <a
                  className="fas fa-rocket"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://politicojeopardy.surge.sh/"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
