import React, { Component } from "react";
import "./App.css";
import Home from "../components/home/Home";
import About from "../components/about/About";
import { Link, Route } from "react-router-dom";
import Work from "../components/work/Work";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { toggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      toggleOn: !state.toggleOn
    }));
  }
  render() {
    return (
      <div className="app">
        <header>
          <div className="navborder">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "grey"
              }}
            >
              Christina f. thompson
            </Link>
            <div className="spacer" />
            <button className="burger" onClick={this.handleClick} />
            <div className={this.state.toggleOn ? "nav-open" : "nav-closed"}>
              <nav>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "grey" }}
                >
                  ABOUT
                </Link>
                <Link
                  to="/work"
                  style={{ textDecoration: "none", color: "grey" }}
                  className="work"
                >
                  WORK
                </Link>{" "}
                <Link
                  to="/resume"
                  style={{ textDecoration: "none", color: "grey" }}
                  className="resume"
                >
                  SERVICES{" "}
                </Link>{" "}
              </nav>
            </div>
          </div>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
        </main>
        <footer>
          <a
            className="fab fa-github"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/christinafthompson"
          />{" "}
          <a
            className="fab fa-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/christinafthompson/"
          />{" "}
          <a
            className="fas fa-address-card"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:thomp.christina@gmail.com"
          />
        </footer>
      </div>
    );
  }
}

export default App;
