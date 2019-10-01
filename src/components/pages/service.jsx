import React from "react";
import Navbar from "./partials/navbar";
import groupcard from "../../groupcard.png";
import groupcard2 from "../../groupcard2.png";
import { Link } from "react-router-dom";



const Service = () => (

  <div className="hide-all">

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
      We lways strive to understand specific digital and economical challenges people face and provide solutions through our innovations. 
Our goal is to improve the lives of 5 million people through our products and services by year 2040. 
We will be the best expression for creative innovations and will always place people at the core of our products and services.
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
      Who we are 
      </h5>
      <p className="body-services">
                  Since 2017 Optimal Source plus Ltd team is helping to push creativity and tech into
                  the mainstream. <br /> We are a team of great enthusiasts that
                  believe everyone should have freedom of choice.
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
    
    