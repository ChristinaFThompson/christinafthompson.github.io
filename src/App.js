import React, { Component } from "react";
import "./App.css";
import { Parallax } from "react-parallax";

const styles = {
  fontFamily: "Lucida Sans",
  textAlign: "center"
};
const insideStyles = {
  // background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const image1 =
  "https://images.pexels.com/photos/761142/pexels-photo-761142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const image2 =
  "https://images.pexels.com/photos/1092364/pexels-photo-1092364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const image3 =
  "https://images.pexels.com/photos/696644/pexels-photo-696644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

class App extends Component {
  render() {
    return (
      <div className={styles}>
        <div className="Parallax" />
        <Parallax bgImage={image2} strength={500}>
          <div style={{ height: 1000 }}>
            <div style={insideStyles}>
              <h1 className="header">Christina Thompson </h1>
              {/* <span className="tagline">Developer | </span> */}
            </div>
          </div>
        </Parallax>
        <h2 className="center"> ABOUT.</h2>
        <Parallax bgImage={image3} strength={500}>
          <div style={{ height: 1000 }}>
            <div style={insideStyles}>
              <p className="description">
                As a software engineer with a growing understanding of computer
                science fundamentals, I analyze and develop practical solutions
                with technology. I aim to create tools that accelerate
                operational capacity for organizations. My empathetic approach
                facilitates coalition building and quantifiable results.
              </p>
              <p className="description">
                I enjoy the nuance of integrating different backend and frontend
                frameworks, finding joy in the highs and lows of each project.
                Constantly learning, I've worked with React, Javascript,
                Express, Node.js, HTML5 & CSS, Python, Django, MongoDB,
                PostgreSQL.
              </p>
            </div>
          </div>
        </Parallax>
        <h2 className="center"> WORK.</h2>
        <Parallax bgImage={image2} strength={500}>
          <div style={{ height: 1000 }}>
            <div style={insideStyles}>
              {/* <h1>Parallax Flipping Cards</h1> */}
              <div className="card-container">
                <div className="card">
                  <section className="front">
                    <img
                      src="https://i.imgur.com/FhP366s.png"
                      height="300"
                      width="500"
                    />
                  </section>
                </div>
              </div>
              <a href="https://github.com/ChristinaFThompson/Jeopardy-project1">
                <p className="links">[ Github ]</p>
              </a>
              <a href="https://giveblack-project2.herokuapp.com/">
                <p className="links">[ App ]</p>
              </a>
              <br />
              <div className="card-container">
                <div className="card">
                  <section className="front">
                    <img
                      src="https://i.imgur.com/PdIFRph.png"
                      height="300"
                      width="500"
                    />
                  </section>
                </div>
              </div>
              <a href="https://github.com/ChristinaFThompson/Trippin-Frontend">
                <p className="links">[ Github ]</p>
              </a>
              <a href="https://trippin-travel.herokuapp.com/">
                <p className="links">[ App ]</p>
              </a>
            </div>
          </div>
        </Parallax>
        <footer className="contact">
          <p>Let's build something great! email me: cfthompson321@gmail.com </p>
        </footer>
      </div>
    );
  }
}

export default App;
