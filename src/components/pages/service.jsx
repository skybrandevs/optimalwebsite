import React from "react";
import Navbar from "./partials/navbar";
import groupcard from "../../groupcard.png";
import groupcard2 from "../../groupcard2.png";
import { Link } from "react-router-dom";



const Service = () => (

  <div>

<div className="white-smoke-2">
<div className="bac-service">

<Navbar/>

</div>

{/*end of service navbar and top image*/}


<div className="container">

<h5 className="clients-intro">
      All Latest Games.
      </h5>

      <p className="body-services">
                  Since 2017 Remote-how team is helping to push remote work into
                  the mainstream. <br /> We are a team of 19 enthusiasts that
                  believe everyone should have freedom of choice as to where,
                  <br /> when and how you work.
                </p>


      <div className="row">


<div className="col-sm-6">
<img src={groupcard} className="img-fluid logo-ball"/>


<Link to="">
  <p className="color-link">

Visit Official Website. 
</p>
</Link>

</div>


<div className="col-sm-6">
<img src={groupcard2} className="img-fluid logo-ball"/>
</div>






      </div>




</div>

</div>




<div className="container">

<h5 className="clients-intro">
      Other products & services.
      </h5>
      <p className="body-services">
                  Since 2017 Remote-how team is helping to push remote work into
                  the mainstream. <br /> We are a team of 19 enthusiasts that
                  believe everyone should have freedom of choice as to where,
                  <br /> when and how you work.
                </p>

<div className="row">

<div className="col-sm-3">


</div>


<div className="col-sm-3">

  
</div>


<div className="col-sm-3">
  
</div>


</div>



</div>



</div>
    
    
    )
    
    export default Service;
    
    