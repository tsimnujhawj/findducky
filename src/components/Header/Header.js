import React from "react";
import "./Header.css";

// create a header with a Bootstrap navbar and jumbotron
const Header = props => (
  
  <div className="main-container">
    <nav className="navbar sticky-top navbar-light bg-light justify-content-end">
      <h5>Current game score: {props.currentScore} | Top score: {props.topScore}</h5>
    </nav>
    
    <div className="jumbotron">
      <h1>Heroes Memory Game</h1>
      <p className="lead">Click a card only once!</p>
    </div>
  </div>
);

export default Header;