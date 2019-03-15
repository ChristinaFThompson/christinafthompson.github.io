import React, { Component } from "react";
import "./App.css";
import Home from "../components/home/Home";
import About from "../components/about/About";
import { Link, Route } from "react-router-dom";
import Work from "../components/work/Work";
import Services from "../components/services/Services";

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
            <div className="logo">
              <Link to="/">Christina f. thompson</Link>
            </div>
            <div className="spacer" />
            <button className="burger" onClick={this.handleClick} />
            <div className={this.state.toggleOn ? "nav-open" : "nav-closed"}>
              <nav>
                <Link to="/work">work</Link>
                <Link to="/about" className="work">
                  about
                </Link>{" "}
                <Link to="/services" className="services">
                  services{" "}
                </Link>{" "}
              </nav>
            </div>
          </div>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/services" component={Services} />
        </main>
      </div>
    );
  }
}

export default App;
