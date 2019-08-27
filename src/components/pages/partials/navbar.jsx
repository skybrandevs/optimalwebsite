import React from "react";
import { Link } from "react-router-dom";
import icon_user_account from "../../../icon_user_account.svg";
import optimal from "../../../optimal.png";


const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div className="container">
      <a className="navbar-brand" href="#">
        <Link to="/">
          <img src={optimal} className="img-fluid logo-site" alt="logo" />
        </Link>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link to="/" className="nav-link menu-mrg a-2">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link menu-mrg a-2">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/service" className="nav-link menu-mrg a-2">
              Services
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/team" className="nav-link menu-mrg a-2">
              Our team
            </Link>
          </li>

          <li className="nav-item">
            <Link to="" className="nav-link menu-mrg a-2">
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link menu-mrg a-2">
              <span>
                {" "}
                <img
                  src={icon_user_account}
                  className="img-fluid icon-set"
                  alt="icon"
                />{" "}
              </span>
              My account
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);


export default Navbar;