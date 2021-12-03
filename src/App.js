import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/about/About";
import { Works } from "./components/Works/Works";
import { Skills } from "./components/skills/Skills";
import { Sidebar } from "./components/sidebar/Sidebar";
import { CarouselImages } from "./components/carousel/CarouselImages";

export const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="side">
          <nav className="navbar side navbar-expand-lg navbar-light p-0">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              style={{ zIndex: "1" }}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <Sidebar />
            </div>
          </nav>
        </div>
        <div className="main">
          <div>
            <CarouselImages />
          </div>
          <About />
          <Skills />
          <Works />
        </div>
      </div>
    </Router>
  );
};
