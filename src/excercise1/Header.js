import { Component } from "react";
import "../excercise1-css/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo-nav">
            <div className="logo">
              <a href="#">Start Boostrap</a>
            </div>
            <div className="navbar">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
