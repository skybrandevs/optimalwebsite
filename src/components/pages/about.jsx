import React from "react";
import Navbar from "./partials/navbar";
import logo1 from "../../logo1.jpg";
import logo2 from "../../logo2.png";
import logo3 from "../../logo3.png";
import about from "../../about.svg";
import mission from "../../mission.svg";
import vision from "../../vision.svg"

const About = () => (
  <div className="hide-all">
    <div className="bac-about" id="section2">
      <Navbar />
    </div>

    {/**close of background image */}

    <div className="container">



      <img src={about} className="about"/>
      <h5 className="clients-intro">About Us</h5>

      <p className="middle-text">We have an awesome story...</p>

      <p className="clients-paragh">
        Optimal Source Plus LTD is a creative agency that leverages on advanced
        technologies to <br />deliver consolidated solutions through meaningful
        innovations. <br />Optimal Source Plus was founded by a team who share a
        passion to influence <br /> and nurture the human spirit, one app, one
        person at a time.
      </p>
    </div>

    <div className="container">
    <img src={mission} className="about"/>
      <h5 className="clients-intro">Mission</h5>

      <p className="middle-text">Our promise </p>

      <p className="clients-paragh">
      At optimal source plus LTD, we want to leverage on advanced technologies to solve problems<br/> while expressing our creativity in a way that impacts society one person at a time. <br/>We always strive to understand specific digital and economical challenges <br/> people face and provide solutions through our innovations.
      </p>

    </div>

    <div className="container">
    <img src={vision} className="about"/>
      <h5 className="clients-intro">Vision</h5>

      <p className="middle-text">
      Our goals{" "}
      </p>

      <p className="clients-paragh">
      Optimal Source Plus LTD is driven with the purpose of delivering an exciting experience to our clients.
      <br/> We seek to apply our innovative expertise to contribute to society through technology and integrated solutions. <br/>
Our goal is to improve the lives of 5 million people through our products and services by the year 2040. <br/>
We will be the best expression for creative innovations and will always place people at the core of our products and services.
      </p>
    </div>

    <div>
      <div className="smoke">
      

<div className="container">
      <h5 className="clients-intro">
        
      We Collaborate With More Than (insert realistic figure) Organizations Around The Globe. 
      </h5>

      <p className="clients-paragh">
     
We have a diverse sense of brand experience with a well articulated <br/> strategy & tactical ideas that delivers client expectations. 
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

      </div>
      </div>
    </div>
    </div>

    {/** main parent div  */}
  </div>
);

export default About;
