import React, { Component } from "react";
import logo from "../images/brand.jpg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          {/* Nav-header */}
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Brand" className="brand-img" />
            </Link>
            <button
              type="submit"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          {/* Nav-body */}
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
