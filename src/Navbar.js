import "./Navbar.css";

import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Navbar() {
    function  show() {
        const sidebar=document.querySelector(".menu");
        sidebar.classList.toggle("active");
       }


  return (
    <div className="nav-container">
      <nav className="navbar">
        <div id="navbar-logo">
          <img className="logo__image" src="https://www.quizando.com/assets/Quizando-Logo.png" />
        </div>
        <div className="mobile-menu-icon" id="#mobile-menu" onClick={show}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="nav-menu">
          <li>
            <a href="#" className="nav-links">
              Live!
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Classics
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Free Games
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Private Events
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Our Partners
            </a>
          </li>
        </ul>
        <div className="signup">
          <select className="dropdown">
            <option>EUR</option>
            <option>USD</option>
            <option>GBP</option>
          </select>
          <AccountCircleIcon className="signup__icon" />
          <span className="login">Login</span>
          <span>Sign Up</span>
        </div>
      </nav>
    </div>
  );
}
