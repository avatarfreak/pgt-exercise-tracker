import React, { Component } from "react";
import "bulma/css/bulma.min.css";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import "./toggle";
export class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={logo} width="112" height="28" alt="N2d" />
          </Link>
          <div
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
          >
            <span aria-hidden></span>
            <span aria-hidden></span>
            <span aria-hidden></span>
          </div>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Exercises
            </Link>
            <Link to="/create" className="navbar-item">
              Create Exercises
            </Link>
            <Link to="/user" className="navbar-item">
              Create User
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
