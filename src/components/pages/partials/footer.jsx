import React from "react";
import {Link} from "react-router-dom";
import question_icon from "../../../question_icon.svg";
import mail from "../../../mail.svg";
import scroller from "../../../scroller.svg";

const Footer = () => (
  <div className="container">
    <div className="top-mrng">
      <div className="row">
        <div className="col-sm-3">
          <h5 className="optimal-name">Optimal source Ltd.</h5>

          <li>
            <Link to="/" className="footer-link">
              <span>
                <img
                  src={question_icon}
                  className="img-fluid small"
                  alt="icon"
                />
              </span>
              Help center
            </Link>
          </li>

          <li>
            <Link to="" className="footer-link">
              <span>
                <img src={mail} className="img-fluid small" alt="icon" />
              </span>
              help@optimalsource.com
            </Link>
          </li>
        </div>
        <div className="col-sm-3">
          <h5 className="optimal-name">Company</h5>

          <li>
            <Link to="" className="footer-link">
              Careers
            </Link>
          </li>

          <li>
            <Link to="" className="footer-link">
              Contact us
            </Link>
          </li>

          <li>
            <Link to="" className="footer-link">
              Services
            </Link>
          </li>

          <li>
            <Link to="/about" className="footer-link">
              About us
            </Link>
          </li>
        </div>
        <div className="col-sm-3">
          <h5 className="optimal-name">Discover</h5>

          <li>
            <Link to="" className="footer-link">
              The Cueball Community
            </Link>
          </li>
          <li>
            <Link to="" className="footer-link">
              My Cueball account
            </Link>
          </li>

          <li>
            <Link to="" className="footer-link">
              Cueball
            </Link>
          </li>
        </div>
        <div className="col-sm-3">
          <h5 className="optimal-name">Get social</h5>

          <li>
            <Link to="" className="link-fb">
              Facebook
            </Link>
          </li>

          <li>
            <Link to="" className="link-ig">
              Instagram
            </Link>
          </li>

          <li>
            <Link to="" className="link-twitter">
              Twitter
            </Link>
          </li>
        </div>
      </div>
    </div>

    <div className="line" />

    <div className="row">
      <div className="col-sm-12">
        <p className="terms">
          Terms & Conditions Apply for all Products | 2019 Optimal source plus
          All rights reserved.
        </p>

        <img src={scroller} className="img-fluid scroller fixed-bottom" />
      </div>
    </div>

    {/*footer div */}
  </div>
);

export default Footer;
