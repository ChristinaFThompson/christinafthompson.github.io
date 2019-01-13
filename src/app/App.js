import React, { Component } from "react";
import "./App.css";
import Home from "../components/home/Home";
import About from "../components/about/About";
import { Link, Route } from "react-router-dom";
import Contact from "../components/contact/Contact";
import Work from "../components/work/Work";

// create props in componenet then pass to app.js
class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact" className="contact">
              Contact{" "}
            </Link>
            <Link to="/work" className="work">
              Work
            </Link>{" "}
            <br />
            <a
              className="fab fa-github"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/christinafthompson"
            />
            <a
              className="fab fa-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/christinafthompson/"
            />
          </nav>
        </header>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/work" component={Work} />
        <footer />
      </div>
    );
  }
}

export default App;
