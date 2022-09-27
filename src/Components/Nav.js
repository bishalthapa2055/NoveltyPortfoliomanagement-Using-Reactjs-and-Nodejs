import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";
const Nav = () => {
  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 0);
  }
  return (
    <>
      <React.StrictMode>
        <Router>
          {/* <Link to="/home" onClick={() => refreshPage()}>
            HOME
          </Link> */}
          <Link to={{ pathname: "/dashboard" }} onClick={refreshPage}>
            DASHBOARD
          </Link>
          <Link to={{ pathname: "/aboutme" }} onClick={refreshPage}>
            ABOUT ME
          </Link>
          <Link to="/trading" onClick={() => refreshPage()}>
            TRADING (BUY / SELL)
          </Link>
          <Link to="/details" onClick={() => refreshPage()}>
            DETAILS
          </Link>
          <Link to="/proloss" onClick={() => refreshPage()}>
            PORFIT / LOSS
          </Link>

          {/* <a href="#">Link</a> */}
        </Router>
      </React.StrictMode>
    </>
  );
};

export default Nav;
