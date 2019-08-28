import React from "react";
import Navbar from "./partials/navbar";
import  facemember from "../../facemember.svg";
import facememeber_2 from "../../facememeber_2.svg";
import facemember_3 from "../../facemember_3.svg";
import opt1 from "../../opt1.svg";
import opt2 from "../../opt2.svg";
import opt3 from "../../opt3.svg";
import cn from "../../cn.svg";
import spotify from "../../spotify.svg";
import dropbox from "../../dropbox.svg";
import slack from "../../slack.svg";
import cocacola from "../../cocacola.svg";
import netflix from "../../netflix.svg";
import toshiba from "../../toshiba.svg";
import booking from "../../booking.svg";

const Team = () => (

<div className="hide-all">

<div className="bac-team">

<Navbar/>


</div>
{/* end of bacground top image*/}


<div className="container">

<h5 className="clients-intro">
Meet our outstanding & creative 
team members 
      </h5>

      <p className="middle-text">We love & encourage creative minds...</p>

      <p className="clients-paragh">
      At Optimal Source Plus Ltd, we have our eyes on the ball, <br></br>
our ears to the ground and our fingers on the 
pulse of everything we do.
      </p>

{/*end of intro */}
</div>

<div className="container ">

<div className="row justify-content-center">

<div className="col-sm-3 col">
{/*
    <img src={facemember} className="img-fluid team-face" alt=""/>
*/}
    <h6 className="member-name">Micheal Saw</h6>
    <h6 className="member-position">Ceo/Manager</h6>

    <p className="about-member">Bsce Maths , Phd statistics.</p>

</div>

<div className="col-sm-3 col">
   {/*
<img src={facememeber_2} className="img-fluid team-face" alt=""/> 
   */}
<h6 className="member-name">Sharon Ogun</h6>
    <h6 className="member-position">Hr Manager</h6>

    <p className="about-member">Bsce Maths , Phd phsycology</p>
</div>


<div className="col-sm-3 col">
    {/*
<img src={facemember_3} className="img-fluid team-face" alt=""/>
    */}
<h6 className="member-name">Salami Moshood</h6>
    <h6 className="member-position">Country Manager</h6>

    <p className="about-member"> Hnd Arts , Msce++ statistics.</p>
</div>


</div>



</div>

{/*end */}



<div className="container mrg-top-team ">

<div className="row justify-content-center">

<div className="col-sm-3 col">

{/*
    <img src={opt1} className="img-fluid team-face" alt=""/>
*/}
    <h6 className="member-name">Vera Patric</h6>
    <h6 className="member-position">Ceo/Manager</h6>

    <p className="about-member">Bsce Maths , Phd statistics.</p>

</div>

<div className="col-sm-3 col">
   {/*
<img src={opt2} className="img-fluid team-face" alt=""/> 
   */}
<h6 className="member-name">Yomi Adeogun</h6>
    <h6 className="member-position">Hr Manager</h6>

    <p className="about-member">Bsce Maths , Phd phsycology</p>
</div>


<div className="col-sm-3 col">
    {/*
<img src={opt3} className="img-fluid team-face" alt=""/>
    */}
<h6 className="member-name">Jessica Abasi</h6>
    <h6 className="member-position">Country Manager</h6>

    <p className="about-member"> Hnd Arts , Msce++ statistics.</p>
</div>


</div>



</div>

{/*end*/}






<div className="container">
      <h5 className="clients-intro mrg-top-team-2">
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
    


    <div className="curve-blue">


<div className="container">


<div className="row">

<div className="col-sm-12">

<h5 className="newsletter">Sign up for our Newsletter.</h5>
<p className="smaller-text">Sign up for our newsletter & <br></br>See why millions of people across 195 countries play cueball.</p>

<a href="newsletter.html" target="_blank;">
<button className="btn-submit-news">Proceed to up. </button>
</a>


<p className="spam">*enter your mail we promise not to spam you.*</p>

</div>

</div>



</div>



    </div>



</div>




)

export default Team;

