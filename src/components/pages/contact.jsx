import React from "react";
import Navbar from "./partials/navbar";
import art from "../../art.svg";
import tell from "../../tell.png";


const Contact = ()=> (


<div className="hide-all">

<div className="bac-contact">

<Navbar/>

</div>


<div className="container">

<h5 className="clients-intro">
    We would love to hear from you
      </h5>
      <p className="clients-paragh">
feel free to reach out to us..whisper to us your messages , <br></br>we take all messages we recieve as awesome tidings.
</p>


<div className="row">


<div className="col-sm-6">
<img src={art} className="img-fluid"/>
</div>

<div className="col-sm-6">


      <p className="body-services mrg-top-services">
                  Since 2017 Optimal Source plus Ltd team is helping to push creativity and tech into
                  the mainstream. <br /> We are a team of great enthusiasts that
                  believe everyone should have freedom of choice.
                </p>

<a href="contact.html" target="_blank;">
<img src={tell} className="img-fluid tell"/>
</a>
    
</div>


</div>



</div>











</div>



)


export default Contact;