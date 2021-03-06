import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Component } from "react";
import InstructionModal from "../InstructionsModal";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <InstructionModal />
          <Link className="navbar-brand" to="/characterSelect">
            Choose Character
          </Link>

          <button className="btn">
            <span className="badge badge-primary">Start</span>
          </button>

          <div class="g-signin2" data-onsuccess="onSignIn" />

          <Link className="navbar-brand" to="/">
            Home
          </Link>
        </nav>

        <div id="title-id" />
      </div>
    );
  }
}

export default Navbar;
