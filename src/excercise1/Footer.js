import { Component } from "react";
import "../excercise1-css/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <p>Copyright © Your Website 2022</p>
          </div>
        </div>
      </div>
    );
  }
}
