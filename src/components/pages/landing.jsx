import React from "react";
import { Link } from "react-router-dom";
import appsLogo from "../../appsLogo.svg";
import playLogo from "../../playLogo.svg";
import play_cue_ball from "../../play_cue_ball.png";
import cn from "../../cn.svg";
import spotify from "../../spotify.svg";
import dropbox from "../../dropbox.svg";
import slack from "../../slack.svg";
import cocacola from "../../cocacola.svg";
import netflix from "../../netflix.svg";
import toshiba from "../../toshiba.svg";
import booking from "../../booking.svg";
import face_1 from "../../face_1.svg";
import face_2 from "../../face_2.svg";
import cueball_app_screen from "../../cueball_app_screen.svg";
import snooker_icon from "../../snooker_icon.png";
import Navbar from "./partials/navbar";


const Landing = () => (
  <div className="hide-all">
    <div className="bac-image">
      <Navbar />

      <div>
        <h3 className="h3-font">Moving the world,together.</h3>
        <p className="paragraph">
        Optimal Source Plus LTD is a creative agency <br/> that leverages on advanced technologies to 
deliver <br/> consolidated solutions through meaningful innovations. 
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
          <img src={cn} className="img-fluid clients" alt="cartoonnetwork" />
        </div>

        <div className="col-sm-3 col">
          <img src={slack} className="img-fluid clients" alt="cartoonnetwork" />
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
          <img src={cocacola} className="img-fluid clients" alt="cocacola" />
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
            Save time, avoid losing work and information, delegate, and track
            tasks to stay on schedule
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
               We lways strive to understand specific digital and economical challenges people face and provide solutions through our innovations. <br></br>Our goal is to improve the lives of 5 million people through our products and services by year 2040. <br></br>We will be the best expression for creative innovations and will always place people at the core of our products and services.
                </p>

<Link to="/about">
                <button className="button-optimal">Learn more </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*brief about us div */}
    </div>





    <div className="curve-blue">


<div className="container">


<div className="row">

<div className="col-sm-12">

<h5 className="newsletter">Sign up for our Newsletter.</h5>
<p className="smaller-text">Sign up for our newsletter & <br></br>See why millions of people across 195 countries play cueball.</p>

<a href="newsletter.html" target="_blank;">
<button className="btn-submit-news">let's proceed now. </button>
</a>


<p className="spam">*enter your mail we promise not to spam you.*</p>

</div>

</div>



</div>



    </div>


    <div className="container">
      <p className="clients-paragh-2">"Don’t just take our word for it"</p>
      <h5 className="clients-intro-2">What our gamers and clients say ...</h5>

      <div className="media">
        <img src={face_1} class="mr-3 img-fluid avatars" alt="face-1" />
        <div className="media-body">
          <h5 className="mt-0 user-name">Johnson Adebayo</h5>
          <p className="testimonials">
            “Wow! The cueball app is an awesome product from optimal source plus
            Ltd. None like it for now. But still needs some improvements. <br />
            I love it. Well done developers. A nice job.”
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
              Make cool cash while you relax , play & have fun with a free cue
              ball account.
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




    

    {/*main parent closing div  */}
  </div>
);

export default Landing;
