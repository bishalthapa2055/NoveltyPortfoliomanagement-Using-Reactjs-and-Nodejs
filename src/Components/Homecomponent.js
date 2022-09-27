import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Homecomponent.css";
import Trading from "./Core/Trading.js";
// import About from "./Core/About.js";
// import Details from "./Core/Details.js";
import Dashboard from "./Core/Dashboard";
// import Proloss from "./Core/Proloss";
import Formcomponent2 from "./Formcontroller2";
import Nav from "./Nav.js";
import Displaycomponent2 from "./Displaycomponent2";
import Card from "./Card/Card";
import About from "./Core/About.js";
import Home from "./Core/Home";
const Homecomponent = () => {
  return (
    <>
      <div className="sidenav">
        <Nav />
      </div>

      <div className="content">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trading" element={<Formcomponent2 />} />
            <Route path="/aboutme" element={<About />} />
            <Route path="/details" element={<Displaycomponent2 />} />
            <Route path="/proloss" element={<Card />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default Homecomponent;
