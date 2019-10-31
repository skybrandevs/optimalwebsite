import React from "react";
import Navbar from "./partials/navbar";
import logo1 from "../../logo1.jpg";
import logo2 from "../../logo2.png";
import logo3 from "../../logo3.png";
import linked from "../../linked.svg";
import facemember_2 from "../../facemember_2.svg";
import facemember from "../../facemember.svg";
import facemember_3 from "../../facemember_3.svg";
import opt1 from "../../opt1.svg";

const Team = () => (

<div className="hide-all">

<div className="bac-about" id="section2">

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
      These People Work Hard So You Can Play Hard. 
      </p>

{/*end of intro */}
</div>

<div className="container ">

<div className="row justify-content-center">

<div className="col-sm-3 col">

    <img src={facemember} className="img-fluid team-face zoom" alt=""/>

    <h6 className="member-name">Micheal Iyaki</h6>
    <h6 className="member-position">Co-founder <br/> optimal plus</h6>
    
<a href="https://www.linkedin.com/in/michael-iyaki-0378b8147/" target="_blank;" > <img src={linked} id="icon-prof" className="zoom"/> </a>

{/*
    <p className="about-member">Bsce Maths , Phd statistics.</p>
*/}
</div>

<div className="col-sm-3 col">
   
<img src={facemember_2} className="img-fluid team-face zoom" alt=""/> 

<h6 className="member-name">Daniel Iyaki</h6>
    <h6 className="member-position">Director of <br/> operations.</h6>
 
<a href="https://www.linkedin.com/in/iyaki-daniel/" target="_blank;"> <img src={linked} id="icon-prof" className="zoom"/> </a>

{/*
   
<p className="about-member">Bsce Maths , Phd phsycology</p>
*/}
</div>


<div className="col-sm-3 col">

<img src={facemember_3} className="img-fluid team-face zoom" alt=""/>

<h6 className="member-name">Yemi Olufelo</h6>
    <h6 className="member-position">Business & <br/> development.</h6>
   
<a href="https://www.linkedin.com/in/oluyemiolufelo" target="_blank;"> <img src={linked} id="icon-prof"  className="zoom"/> </a>

{/*
    <p className="about-member"> Hnd Arts , Msce++ statistics.</p>
*/}
</div>


</div>



</div>

{/*end */}



<div className="container mrg-top-team ">

<div className="row justify-content-center">

<div className="col-sm-3 col">

    <img src={opt1} className="img-fluid team-face zoom" alt=""/>

    <h6 className="member-name">Moshood Ogunsanya</h6>
    <h6 className="member-position">Brand manager & co-operate <br></br> communications.</h6>
   
<a href="https://www.linkedin.com/in/ogunsanya-moshood-959911150/" target="_blank;"> <img src={linked} id="icon-prof" className="zoom"/> </a>

{/*
    <p className="about-member">Bsce Maths , Phd statistics.</p>

*/}
</div>

<div className="col-sm-3 col">
   {/*
<img src={opt2} className="img-fluid team-face" alt=""/> 
   
<h6 className="member-name">Yomi Adeogun</h6>
    <h6 className="member-position">Hr Manager</h6>

    <p className="about-member">Bsce Maths , Phd phsycology</p>
    */}
</div>


<div className="col-sm-3 col">
    {/*
<img src={opt3} className="img-fluid team-face" alt=""/>
    
<h6 className="member-name">Jessica Abasi</h6>
    <h6 className="member-position">Country Manager</h6>

    <p className="about-member"> Hnd Arts , Msce++ statistics.</p>
    */}
</div>


</div>



</div>

{/*end*/}



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




)

export default Team;

