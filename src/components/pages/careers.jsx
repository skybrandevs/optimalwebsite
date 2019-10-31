import React from 'react';
import Navbar from "./partials/navbar";
import logo1 from "../../logo1.jpg";
import logo2 from "../../logo2.png";
import logo3 from "../../logo3.png";


const Careers =()=> (


<div className="hide-all">

<div className="bac-about">

<Navbar/>


</div>
{/* end of bacground top image*/}


<div className="container">

<h5 className="clients-intro">Careers</h5>

<p className="middle-text">Start your path with an awesome career with us.</p>



<p className="clients-paragh">
Sorry there are no openings at the moment , Kindly check back for future chances...
</p>

</div>






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



export default Careers;