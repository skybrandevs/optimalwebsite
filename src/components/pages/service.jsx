import React from "react";
import Navbar from "./partials/navbar";
import groupcard from "../../groupcard.png";
import groupcard2 from "../../groupcard2.png";
import { Link } from "react-router-dom";



const Service = () => (

  <div className="hide-all">

<div className="white-smoke-2">
<div className="bac-about" id="section2">

<Navbar/>

</div>

{/*end of service navbar and top image*/}


<div className="container">

<h5 className="clients-intro">
      All Latest Games.
      </h5>

      <p className="body-services">
      We always strive to understand specific digital and economical challenges people face and provide solutions through our innovations. 
Our goal is to improve the lives of 5 million people through our products and services by year 2040. 
We will be the best expression for creative innovations and will always place people at the core of our products and services.
                </p>


      <div className="row">


<div className="col-sm-6">
<img src={groupcard} className="img-fluid logo-ball"/>


<a href="https://optimalsplus.com/cueball" target="_blank;">
  <p className="color-link">

Visit Official Website. 
</p>
</a>

</div>


<div className="col-sm-6">
<img src={groupcard2} className="img-fluid logo-ball"/>
</div>






      </div>




</div>

</div>




<div className="container">

 
            
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
    
    