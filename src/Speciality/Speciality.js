import React from "react";
import "./Speciality.css";
// import illustration from "../Image/illustration.png";
import ayurveda from "../Image/ayurveda.svg";
import ophta from "../Image/ophta.svg";
import neuro from "../Image/neuro.svg";
import derma from "../Image/derma.svg";
class Speciality extends React.Component
{
  constructor () 
  { super ();
    this.state = {
    speciality: [
      { name:"Ayurveda", image: ayurveda},
      { name:"Ophtamologist", image: ophta},
      { name:"Neurologist", image: neuro},
      { name:"Dermatologist", image: derma},
      { name:"Dentist", image: ayurveda},
      { name:"Physician", image:ophta}
      ]
    
    }
  }
  
 render()
 {
    return(
    <div className="Speciality">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Desk</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">At glance</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Membership</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">News</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Downloads</a>
      </li>
    </ul>
    
  </div>
</nav>
<div className="pic" >
<div className="form-group has-search" style={{position:"absolute",marginBottom:"100px",zIndex:"1"}}>
    <span className="fa fa-search form-control-feedback"></span>
    <input type="text" className="form-control" placeholder="Search for Doctor’s, Clinic’s, Services & more.." 
style={{width: "672px",
height: "61px",
marginLeft: "384px",
marginTop: "319px",
background: "#FFFFFF",
borderRadius: "20px"}}/>
    </div>
</div>
<div className="heading">Trending Specialities</div>
{
  this.state.speciality.map((s,index)=> (
    index%2 === 0  ?
      (<div className="row" key={index}>
    <div className={ index===2 ? 'col-6 giveborder speciality_col speciality_givePaddingLeft' : 'col-6 speciality_col speciality_givePaddingLeft' } style={{textAlign:"left"}} >
    <a
             className="link"
             href="#">
            <img  src={s.image} className="Image" alt=""/>{s.name}
           </a>
    </div>
    <div className="col-6 speciality_col">
   
    </div>
   </div>
    )
  
  :

   (<div className="row" key={index}>
    <div className={ index===1 ? 'col-6 giveborder speciality_col' : 'col-6 speciality_col' } >
    
    </div>
    <div className="col-6 speciality_col speciality_givePaddingRight" style={{textAlign:"left"}}>
    <a
             className="link"
             href="#">
            <img  src={s.image} className="Image" alt=""/>{s.name}
           </a>
    </div>
    </div>)
  
    
    ))
}
<div className="footer"></div> 
  
</div>
    )
 }
}
export default Speciality;
{/* <div className="heading">Trending Specialities</div>
<div class="first row" >
<a
          className="link"
          href="#"
        >
         <img  src={ayurveda} className="Image" alt=""/>Ayurveda 
         
        </a>
        <div className="v1"></div>
        
</div>
<div class="second row " style={{paddingLeft:"819px"}}>
  
 <a
          className="link"
          href="#">
         <img  src={ayurveda} className="Image" alt="" />Ayurveda 
        </a>
  
</div>
<div class="first row" style={{paddingLeft: "173px"}}>
<a
          className="link"
          href="#">
         <img  src={ophta} className="Image" alt=""/>Ophtamologist
        </a>
</div>
<div class="second row" style={{paddingLeft:"819px"}}>
<a
          className="link"
          href="#">
         <img  src={ophta} className="Image" alt=""/>Ophtamologist
        </a>
</div>
<div class="first row" style={{paddingLeft: "173px"}}>
<a
          className="link"
          href="#">
         <img  src={neuro} className="Image" alt=""/>Neurologist
        </a>
</div>
<div class="second row" style={{paddingLeft:"819px"}}>
<a
          className="link"
          href="#">
         <img  src={neuro}  className="Image" alt=""/>Neurologist 
        </a>
</div>
<div class="first row" style={{paddingLeft: "173px"}}>
<a
          className="link"
          href="#">
         <img  src={derma} className="Image" alt=""/>Dermatologist 
        </a>
</div>
<div class="second row" style={{paddingLeft:"819px"}}>
<a
          className="link"
          href="#">
         <img  src={derma} className="Image" alt=""/>Dermatologist 
        </a>
        
</div>
<div className="row">
 <div className="col-6" style={{borderRight:"5px solid black"}}>
 <a
          className="link"
          href="#">
         <img  src={derma} className="Image" alt=""/>Derma
        </a>
 </div>
 <div className="col-6">

 </div>
</div>
<div className="row">
 <div className="col-6" style={{borderRight:"5px solid black"}}>
 
 </div>
 <div className="col-6">
 <a
          className="link"
          href="#">
         <img  src={derma} className="Image" alt=""/>Derma
        </a>
 </div> */}