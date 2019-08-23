import React from "react";
import appsLogo from "./appsLogo.svg";
import playLogo from "./playLogo.svg";
import play_cue_ball from "./play_cue_ball.png";
import icon_user_account from "./icon_user_account.svg";
import optimal from "./optimal.png";
import cn from "./cn.svg";
import spotify from "./spotify.svg";
import dropbox from "./dropbox.svg";
import slack from "./slack.svg";
import cocacola from "./cocacola.svg";
import netflix from "./netflix.svg";
import toshiba from "./toshiba.svg";
import booking from "./booking.svg";
import face_1 from "./face_1.svg";
import face_2 from "./face_2.svg";
import cueball_app_screen from "./cueball_app_screen.svg";
import snooker_icon from "./snooker_icon.png";
import question_icon from "./question_icon.svg";
import mail from "./mail.svg";
import scroller from "./scroller.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import { template } from "@babel/core";

function App() {
  return (
    <Router>
      <div>
        <div className="bac-image">
          <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container">
              <a className="navbar-brand" href="#">
                <Link to={"App"}>
                  <img
                    src={optimal}
                    className="img-fluid logo-site"
                    alt="logo"
                  />
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

              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <Link to={"App"} className="nav-link menu-mrg a-2">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link menu-mrg a-2" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link menu-mrg a-2" href="#">
                      Services
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="" className="nav-link menu-mrg a-2">
                      Our team
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link menu-mrg a-2" href="#">
                      Contact
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link menu-mrg a-2" href="#">
                      <span>
                        {" "}
                        <img
                          src={icon_user_account}
                          className="img-fluid icon-set"
                          alt="icon"
                        />{" "}
                      </span>
                      My account
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div>
            <h3 className="h3-font">Moving the world,together.</h3>
            <p className="paragraph">
              Optimal source is a complete DevOps platform, <br />
              delivered as a single application.From project <br />
              planning and source code management to <br /> CI/CD, monitoring,
              and security.
            </p>
            <img
              src={play_cue_ball}
              className="img-fluid logo-apps-1"
              alt="logo"
            />{" "}
            <br />
            <img src={appsLogo} className="img-fluid logo-apps" alt="logo" />
            <img src={playLogo} className="img-fluid logo-apps-2" alt="logo" />
          </div>
        </div>

        <div className="container">
          <h5 className="clients-intro">
            {" "}
            We collaborate with more than 100,000 organizations around the globe
          </h5>

          <p className="clients-paragh">
            Our diverse sense of brand experience with a well articulated <br />{" "}
            strategic & tatical ideas that delivers.
          </p>

          <div className="row">
            <div className="col-sm-3 col">
              <img
                src={cn}
                className="img-fluid clients"
                alt="cartoonnetwork"
              />
            </div>

            <div className="col-sm-3 col">
              <img
                src={slack}
                className="img-fluid clients"
                alt="cartoonnetwork"
              />
            </div>

            <div className="col-sm-3 col">
              <img
                src={dropbox}
                className="img-fluid clients"
                alt="cartoonnetwork"
              />
            </div>

            <div className="col-sm-3 col">
              <img
                src={spotify}
                className="img-fluid clients"
                alt="cartoonnetwork"
              />
            </div>
          </div>

          {/* next */}

          <div className="row">
            <div className="col-sm-3 col">
              <img
                src={cocacola}
                className="img-fluid clients"
                alt="cocacola"
              />
            </div>

            <div className="col-sm-3 col ">
              <img
                src={netflix}
                className="img-fluid clients"
                alt="cartoonnetwork"
              />
            </div>

            <div className="col-sm-3 col ">
              <img
                src={toshiba}
                className="img-fluid clients"
                alt="cartoonnetwork"
              />
            </div>

            <div className="col-sm-3 col">
              <img
                src={booking}
                className="img-fluid clients"
                alt="cartoonnetwork"
              />
            </div>
          </div>

          {/*closing div for clients container  */}
        </div>

        <div className="container">
          <h5 className="clients-intro">
            The key questions are answered by our product & services.
          </h5>

          <div className="row">
            <div className="col-sm-4">
              <h6 className="numbers">100%</h6>
              <p className="clients-paragh">
                Monthly increment in <br /> transparency.
              </p>

              <p className="body-1">
                Save time, avoid losing work and information, delegate, and
                track tasks to stay on schedule
              </p>
            </div>

            <div className="col-sm-4">
              <h6 className="numbers">5%</h6>
              <p className="clients-paragh">
                Per minutes increment of <br />
                awesome services.
              </p>

              <p className="body-1">
                Tracking tasks allows everyone to understand which are more
                important or require more time, so{" "}
              </p>
            </div>

            <div className="col-sm-4">
              <h6 className="numbers">95%</h6>
              <p className="clients-paragh">
                Weekly increment in transactions
                <br /> & payout.{" "}
              </p>

              <p className="body-1">
                Tracking tasks allows everyone to understand which are more
                important or require more time, so{" "}
              </p>
            </div>
          </div>

          {/*closing div for services container  */}
        </div>

        <div className="cutslide">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="white-card">
                  <div className="container">
                    <h5 className="clients-intro mobile-intro">
                      What we are about?
                    </h5>
                    <p className="clients-paragh">Our story</p>

                    <p className="body-1 mobile-bottom">
                      Since 2017 Remote-how team is helping to push remote work
                      into the mainstream. <br /> We are a team of 19
                      enthusiasts that believe everyone should have freedom of
                      choice as to where,
                      <br /> when and how you work.
                    </p>

                    <button className="button-optimal">Learn more </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*brief about us div */}
        </div>

        <div className="container">
          <p className="clients-paragh-2">"Don’t just take our word for it"</p>
          <h5 className="clients-intro-2">
            What our gamers and clients say ...
          </h5>

          <div className="media">
            <img src={face_1} class="mr-3 img-fluid avatars" alt="face-1" />
            <div className="media-body">
              <h5 className="mt-0 user-name">Johnson Adebayo</h5>
              <p className="testimonials">
                “Wow! The cueball app is an awesome product from optimal source
                plus Ltd. None like it for now. But still needs some
                improvements. <br />I love it. Well done developers. A nice
                job.”
              </p>

              <div className="media mt-3">
                <a className="mr-3" href="#">
                  <img src={face_2} class="mr-3 img-fluid avatars" alt="..." />
                </a>
                <div className="media-body mrg-bottom">
                  <h5 className="mt-0 user-name">Victoria Aderokun</h5>
                  <p className="testimonials">
                    "Optimal source plus Ltd is a great company to collaborate
                    with."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*brief about us div */}
        </div>

        <div className="white-smoke">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h4 className="cueball-create">
                  Create a free Cueball account to start winning.
                </h4>
                <p className="body-cueball">
                  Make cool cash while you relax , play & have fun with a free
                  cue ball account.
                  <span>
                    This is{" "}
                    <img
                      src={snooker_icon}
                      className="img-fluid snooker"
                      alt="cueball"
                    />
                  </span>{" "}
                  at its best.
                </p>

                <button className="button-optimal-2">Signup </button>
              </div>

              <div className="col-sm-6">
                <img
                  src={cueball_app_screen}
                  className="img-fluid appscreen"
                  alt="cueball"
                />
              </div>
            </div>
          </div>

          {/*app signup div */}
        </div>

        <div className="container">
          <div className="top-mrng">
            <div className="row">
              <div className="col-sm-3">
                <h5 className="optimal-name">Optimal source Ltd.</h5>

                <li>
                  <a href="" className="footer-link">
                    <span>
                      <img
                        src={question_icon}
                        className="img-fluid small"
                        alt="icon"
                      />
                    </span>
                    Help center
                  </a>
                </li>

                <li>
                  <a href="" className="footer-link">
                    <span>
                      <img src={mail} className="img-fluid small" alt="icon" />
                    </span>
                    help@optimalsource.com
                  </a>
                </li>
              </div>
              <div className="col-sm-3">
                <h5 className="optimal-name">Company</h5>

                <li>
                  <a href="" className="footer-link">
                    Careers
                  </a>
                </li>

                <li>
                  <a href="" className="footer-link">
                    Contact us
                  </a>
                </li>

                <li>
                  <a href="" className="footer-link">
                    Services
                  </a>
                </li>

                <li>
                  <a href="" className="footer-link">
                    About us
                  </a>
                </li>
              </div>
              <div className="col-sm-3">
                <h5 className="optimal-name">Discover</h5>

                <li>
                  <a href="" className="footer-link">
                    The Cueball Community
                  </a>
                </li>
                <li>
                  <a href="" className="footer-link">
                    My Cueball account
                  </a>
                </li>

                <li>
                  <a href="" className="footer-link">
                    Cueball
                  </a>
                </li>
              </div>
              <div className="col-sm-3">
                <h5 className="optimal-name">Get social</h5>

                <li>
                  <a href="" className="link-fb">
                    Facebook
                  </a>
                </li>

                <li>
                  <a href="" className="link-ig">
                    Instagram
                  </a>
                </li>

                <li>
                  <a href="" className="link-twitter">
                    Twitter
                  </a>
                </li>
              </div>
            </div>
          </div>

          <div className="line" />

          <div className="row">
            <div className="col-sm-12">
              <p className="terms">
                Terms & Conditions Apply for all Products | 2019 Optimal source
                plus All rights reserved.
              </p>

              <img src={scroller} className="img-fluid scroller fixed-bottom" />
            </div>
          </div>

          {/*footer div */}
        </div>

        {/*main parent closing div  */}
      </div>
    </Router>
  );
}

export default App;
