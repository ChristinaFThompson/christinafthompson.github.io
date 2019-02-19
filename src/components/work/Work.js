import React, { Component } from "react";
import "./work.css";

class Work extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Work.</h1>
        </div>
        <div className="decsription">
          <div>Project 1</div>
          <div>Project 2</div>
          <div>Project 3</div>
          <div>Project 4</div>
        </div>
      </div>
    );
  }
}

export default Work;

/*
<div className="card">
            <div class="imgBx">
              <img src="https://i.imgur.com/UCi95h8.png" />
            </div>
            <div class="details">
              <h2>GiveBlack</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p> social</p>
            </div>
          </div>

/*
<div className="workContainer">
        <div className="textContainer">
          <div className="heading">
            <h1> Work. </h1>
          </div>
          <div className="statement2">
            <div className="projectCard">
              <p>Trippin'</p>
              <p>
                Travel journal app, using geolocation to save and store your
                experiences.
              </p>
              <img
                className="imgCard"
                src="https://i.imgur.com/KbacTxW.png"
                alt="toy bus"
              />
              <a href="https://trippin-travel.herokuapp.com/">
                {" "}
                [ Check it out! ]{" "}
              </a>{" "}
            </div>
            <div className="projectCard">
              <p>RoomKind</p>
              <p className="description">
                Airbnb style app allowing shelters and everyday people to list
                available beds to those in need.
              </p>
              <img
                className="imgCard"
                src="https://i.imgur.com/CcEer2O.png"
                alt="app landing page"
              />
              <a href="http://project3-roomkind.surge.sh/">
                {" "}
                [ Check it out! ]{" "}
              </a>
            </div>
            <div className="projectCard">
              <p>GiveBlack</p>
              <p>
                Donation aggregation app allowing you to donate to your favorite
                charities at once.{" "}
              </p>
              <img
                className="imgCard"
                src="https://i.imgur.com/UCi95h8.png"
                alt="fist in air"
              />
              <a href="https://giveblack-project2.herokuapp.com/">
                {" "}
                [ Check it out! ]{" "}
              </a>{" "}
            </div>
            <div />
          </div>
        </div>
      
      </div>
*/
