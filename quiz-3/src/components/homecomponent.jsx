import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home">
          <h1>Quiz App</h1>
          <NavLink to="/Quiz">
          <button id="homeplay">Play</button>
          </NavLink>
        </div>
      </>
    );
  }
}