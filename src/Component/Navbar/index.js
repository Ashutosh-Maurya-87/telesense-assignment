import React from "react";
import './navbar.css'
const Navbar = () => {
  return (
    <div id="container">
      <div className="left">
        <h2 className="h2">
          <span>Ethereal</span>
        </h2>
        <ul className="list">
          <li>
            <a href="#">Desktop</a>
          </li>
          <li>
            <a href="#">Tablet</a>
          </li>
          <li>
            <a href="#">Tablet (Portrait)</a>
          </li>
          <li>
            <a href="#">Mobile</a>
          </li>
        </ul>
        <a href="">
          {" "}
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
      <div className="right">
        <ul className="share">
          <li className="like">
            <a href="https://www.facebook.com/">
              <button className="button">
                <i className="fa-solid fa-thumbs-up"></i>
                Like
              </button>
            </a>
          </li>

          <li className="tweet">
            <a href="https://www.twitter.com/">
              <button className="button1">
                <i className="fa-brands fa-twitter"></i>Tweet
              </button>
            </a>{" "}
          </li>
        </ul>
        <ul className="back">
          <li> Back</li>
        </ul>
        <ul className="download">
          <li className="dwld">
            {" "}
            <strong>Download </strong>(200,925)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
