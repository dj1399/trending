import React from "react";
import "./Speciality.css";
// import illustration from "../Image/illustration.png";
import ayurveda from "../Image/ayurveda.svg";
import ophta from "../Image/ophta.svg";
import neuro from "../Image/neuro.svg";
import derma from "../Image/derma.svg";
function Speciality ()
{   
    return(
    <div className="Speciality">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Desk</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">At glance</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Membership</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Downloads</a>
      </li>
    </ul>
    
  </div>
</nav>
<div className="pic" >
<div class="form-group has-search" style={{position:"absolute",marginBottom:"100px",zIndex:"1"}}>
    <span class="fa fa-search form-control-feedback"></span>
    <input type="text" class="form-control" placeholder="Search for Doctor’s, Clinic’s, Services & more.." 
style={{width: "672px",
height: "61px",
marginLeft: "384px",
marginTop: "319px",
background: "#FFFFFF",
borderRadius: "20px"}}/>
    </div>
</div>
<div className="heading">Trending Specialities</div>
<div class="row" style={{paddingLeft: "173px"}}>
<a
          className="link"
          href="#"
        >
         <img  src={ayurveda} className="Image" alt=""/>Ayurveda 
        </a>
</div>
<div class="row " style={{paddingLeft:"819px"}}>
  
 <a
          className="link"
          href="#">
         <img  src={ayurveda} className="Image" alt="" />Ayurveda 
        </a>
  
</div>
<div class="row" style={{paddingLeft: "173px"}}>
<a
          className="link"
          href="#">
         <img  src={ophta} className="Image" alt=""/>Ophtamologist
        </a>
</div>
<div class="row" style={{paddingLeft:"819px"}}>
<a
          className="link"
          href="#">
         <img  src={ophta} className="Image" alt=""/>Ophtamologist
        </a>
</div>
<div class="row" style={{paddingLeft: "173px"}}>
<a
          className="link"
          href="#">
         <img  src={neuro} className="Image" alt=""/>Neurologist
        </a>
</div>
<div class="row" style={{paddingLeft:"819px"}}>
<a
          className="link"
          href="#">
         <img  src={neuro}  className="Image" alt=""/>Neurologist 
        </a>
</div>
<div class="row" style={{paddingLeft: "173px"}}>
<a
          className="link"
          href="#">
         <img  src={derma} className="Image" alt=""/>Dermatologist 
        </a>
</div>
<div class="row" style={{paddingLeft:"819px"}}>
<a
          className="link"
          href="#">
         <img  src={derma} className="Image" alt=""/>Dermatologist 
        </a>
</div>
<div className="footer"></div> 
    </div>
    )
}
export default Speciality;