import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navigation">
          <Link to="/" id="header">
            <h1>Gucci Mane</h1>
          </Link>
          <div className="navigation-sub">
            <Link to="/" className="item">
              Projects
            </Link>
            <Link to="/about" className="item">
              About
            </Link>
            <Link to="/contact" className="item">
              Contact
            </Link>
          </div>
        </div>

        <Route exact path="/" component={Project} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
