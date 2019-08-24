import React from "react";
import Navbar from "./partials/navbar";
import cn from "../../cn.svg";
import spotify from "../../spotify.svg";
import dropbox from "../../dropbox.svg";
import slack from "../../slack.svg";
import cocacola from "../../cocacola.svg";
import netflix from "../../netflix.svg";
import toshiba from "../../toshiba.svg";
import booking from "../../booking.svg";

const About = () => (
    <div className="hide-all">
<div className="bac-about">

<Navbar/>

</div>

{/**close of background image */}


<div className="container">


<h5 className="clients-intro">
    About Us    
      </h5>

      <p className="middle-text">We have an awesome story...</p>

      <p className="clients-paragh">
    I just wanted to share a quick note and let you know that you guys do a really good job. <br></br> I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage.
  <br></br>  My new site is so much faster and easier to work with than my old 
    Thanks, guys.
      </p>


</div>




<div className="container">

<h5 className="clients-intro">
    Mission   
      </h5>

      <p className="middle-text">We tend to achieve all what we promise...</p>

      <p className="clients-paragh">
    I just wanted to share a quick note and let you know that you guys do a really good job. <br></br> I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage.
  <br></br>  My new site is so much faster and easier to work with than my old 
    Thanks, guys.
      </p>


</div>




<div className="container">

<h5 className="clients-intro">
    Vision   
      </h5>

      <p className="middle-text">Our views and thinking remains broad enough to deliver.. </p>

      <p className="clients-paragh">
    I just wanted to share a quick note and let you know that you guys do a really good job. <br></br> I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage.
  <br></br>  My new site is so much faster and easier to work with than my old 
    Thanks, guys.
      </p>


</div>

<div>


<div className="smoke">


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



</div>



</div>




</div>



{/** main parent div  */}

    </div>
)

export default About;