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

      <p className="middle-text">We tend to achieve all what we promise...</p>

      <p className="clients-paragh">
      To  leverage advanced technologies and express creative <br></br>freedom that impacts the society one person at a time 

      </p>
    </div>

    <div className="container">
    <img src={vision} className="about"/>
      <h5 className="clients-intro">Vision</h5>

      <p className="middle-text">
        Our views and thinking remains broad enough to deliver..{" "}
      </p>

      <p className="clients-paragh">
      Optimal Source Plus Ltd. is a creative agency driven with the sole aim of delivering unbiased<br></br> expertise and seek to apply their innovative capabilities to contribute <br></br> to the society through technology and integrated solutions.
      </p>
    </div>

    <div>
      <div className="smoke">
      

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

      </div>
      </div>
    </div>
    </div>

    {/** main parent div  */}
  </div>
);

export default About;
