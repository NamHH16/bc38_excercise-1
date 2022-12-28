import { render } from "@testing-library/react";
import { Component } from "react";
import image from "../assets/blank.jpg";
import "../excercise1-css/Item.css";

export default class Item extends Component {
  render() {
    return (
      <div className="item">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="card">
                <img src={image} />
                <div className="card-body">
                  {" "}
                  <h3>Card title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                </div>
                <div>
                  <button className="btn btn-card">Find our more!</button>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src={image} />
                <div className="card-body">
                  {" "}
                  <h3>Card title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                </div>
                <div>
                  <button className="btn btn-card">Find our more!</button>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src={image} />
                <div className="card-body">
                  {" "}
                  <h3>Card title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                </div>
                <div>
                  <button className="btn btn-card">Find our more!</button>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src={image} />
                <div className="card-body">
                  {" "}
                  <h3>Card title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                </div>
                <div>
                  <button className="btn btn-card">Find our more!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
