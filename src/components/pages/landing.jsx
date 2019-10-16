import React from "react";
import { Link } from "react-router-dom";
import appsLogo from "../../appsLogo.svg";
import playLogo from "../../playLogo.svg";
import play_cue_ball_1 from "../../play_cue_ball_1.png";
import cn from "../../cn.svg";
import spotify from "../../spotify.svg";
import dropbox from "../../dropbox.svg";
import slack from "../../slack.svg";
import logo1 from "../../logo1.jpg";
import logo2 from "../../logo2.png";
import logo3 from "../../logo3.png";
import booking from "../../booking.svg";
import face_1 from "../../face_1.svg";
import face_2 from "../../face_2.svg";
import cueball_app_screen from "../../cueball_app_screen.svg";
import snooker_icon from "../../snooker_icon.png";
import Navbar from "./partials/navbar";
import beauty3 from "../../images/beauty3.jpg";
import beauty4 from "../../images/beauty4.jpg";


const Landing = () => (
  <div className="hide-all">

<div id="SLIDE_BG">
      <Navbar/>

      <div>
        <h3 className="h3-font">Moving the world,together.</h3>
        <p className="paragraph">
        Optimal Source Plus LTD is a creative agency <br/> that leverages on advanced technologies to 
deliver <br/> consolidated solutions through meaningful innovations. 
        </p>
        <img
          src={play_cue_ball_1}
          className="img-fluid logo-apps-1"
          alt="logo"
        />
      <br/>
        <img src={appsLogo} className="img-fluid logo-apps zoom" alt="logo" /> <br/>
        <img src={playLogo} className="img-fluid logo-apps-2 zoom" alt="logo" />
      </div>
    </div>

 


<div className="hide-on-desk-top carousel slide" data-ride="carousel" id="carouselExampleIndicators">

<Navbar/>

  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
   
  </ol>

  <div class="carousel-inner">

    <div class="carousel-item active">
      <a href="#" target="_blank;">
   <img src={beauty4} class="d-block w-100 " />
  </a>
    </div>
    <div class="carousel-item">
    <a href="#" target="_blank;">
    <img src={beauty3} class="d-block w-100 " />
    </a>
  </div>
    {/*
    <div class="carousel-item">
    <img src={logo1} class="d-block w-100" />
    </div>
   
    <div class="carousel-item">
    <img src={logo1} class="d-block w-100" />
    </div>
     */}
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>

 </div>


{/*

    <div className="container">
      <h5 className="clients-intro">
        
        We collaborate with more than 100,000 organizations around the globe
      </h5>

      <p className="clients-paragh">
        Our diverse sense of brand experience with a well articulated <br />{" "}
        strategic & tatical ideas that delivers.
      </p>

      <div className="row">
        <div className="col-sm col">
          <img src={logo1} className="img-fluid clients zoom" alt="cartoonnetwork" />
        </div>

        <div className="col-sm col">
          <img src={logo2} className="img-fluid clients zoom" alt="cartoonnetwork" />
        </div>

        <div className="col-sm col">
          <img
            src={logo3}
            className="img-fluid clients zoom"
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

    
    </div>

*/}



    <div className="container">
      <h5 className="clients-intro" id="section2" >
        Facts about our services.
      </h5>


      <div className="row">
        <div className="col-sm-4">
        
          <h6 className="numbers">1</h6>
          
          
          <p className="clients-paragh">
          We have a transparency policy
          </p>

          <p className="body-1">
          We understand how fragile trust is that is why we operate a policy that will ensure we keep yours. 


          </p>
        </div>

        <div className="col-sm-4">
          
          <h6 className="numbers">2</h6>
          
          <p className="clients-paragh">
          We deliver in real time
          </p>

          <p className="body-1">
          With us, you never have to worry about running against the clock. with delivery in real time,Our team works hard to build efficient game API networks for great instant payout. 

          </p>
        </div>

        <div className="col-sm-4">
        
          <h6 className="numbers">3</h6>
          
          <p className="clients-paragh">
          Track Task
          </p>

          <p className="body-1">
          we also place priority on our clients knowing our progress levels.
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
               We always strive to understand specific digital and economical challenges people face and provide solutions through our innovations. <br></br>Our goal is to improve the lives of 5 million people through our products and services by year 2040. <br></br>We will be the best expression for creative innovations and will always place people at the core of our products and services.
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
        <img src={face_1} class="mr-3 img-fluid avatars zoom" alt="face-1" />
        <div className="media-body">
          <h5 className="mt-0 user-name">Johnson Adebayo</h5>
          <p className="testimonials">
            “Wow! The cueball app is an awesome product from optimal source plus
            Ltd. None like it for now. But still needs some improvements. <br />
            I love it. Well done developers. A nice job.”
          </p>

          <div className="media mt-3">
          
              <img src={face_2} class="mr-3 img-fluid avatars zoom" alt="..." />
          
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
              className="img-fluid appscreen lxx"
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
