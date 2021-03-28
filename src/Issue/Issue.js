import React from "react";
import "./Issue.css";
// import illustration from "../Image/illustration.png";
import issues from "../Image/issue.svg";
class Issue extends React.Component 
{   
  constructor () 
  {  super ();
    this.state={ issue:[
      { name:"Covid", image: issues},
      { name:"Hairfall", image: issues},
      { name:"Diabetes", image: issues},
      { name:"Acne", image: issues},
      { name:"Covid", image: issues},
      { name:"Hairfall", image: issues}
    ]}
  }
  render(){
    return(
    <div className="Issue">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

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
<div className="issue__pic" >
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
<div className="issue__heading">Trending Issues</div>
{
  this.state.issue.map((s,index)=> (
    index%2 === 0  ?
      (<div className="row" key={index}>
    <div className={ index===2 ? 'col-6 giveborder issue_col issue_givePaddingLeft' : 'col-6 issue_col issue_givePaddingLeft' } style={{textAlign:"left"}} >
    <a
             className="issue__link"
             href="#">
            <img  src={s.image} className="issue__Image" alt=""/>{s.name}
           </a>
    </div>
    <div className="col-6 issue_col">
   
    </div>
   </div>
    )
  
  :

   (<div className="row" key={index}>
    <div className={ index===1 ? 'col-6 giveborder issue_col' : 'col-6 issue_col' } >
    
    </div>
    <div className="col-6 issue_col issue_givePaddingRight" style={{textAlign:"left"}}>
    <a
             className="issue__link"
             href="#">
            <img  src={s.image} className="issue__Image" alt=""/>{s.name}
           </a>
    </div>
    </div>)
  
    
    ))
}

<div className="issue__footer"></div> 
    </div>
    )
}
}
export default Issue;
{/* <div class="first row" >
<a
          className="link"
          href="#"
        >
         <img  src={image} className="Image" alt=""/>Covid 
         
        </a>
        <div className="v1"></div>
        
</div>
<div class="second row " style={{paddingLeft:"819px"}}>
  
 <a
          className="link"
          href="#">
         <img  src={image} className="Image" alt="" />Hairfall
        </a>
  
</div>
<div class="first row" style={{paddingLeft: "173px"}}>
<a
          className="link"
          href="#">
         <img  src={image} className="Image" alt=""/>Hairfall
        </a>
</div>
<div class="second row" style={{paddingLeft:"819px"}}>
<a
          className="link"
          href="#">
         <img  src={image} className="Image" alt=""/>Diabetes
        </a>
</div>
<div class="first row" style={{paddingLeft: "173px"}}>
<a
          className="link"
          href="#">
         <img  src={image} className="Image" alt=""/>Diabetes
        </a>
</div>
<div class="second row" style={{paddingLeft:"819px"}}>
<a
          className="link"
          href="#">
         <img  src={image}  className="Image" alt=""/>Acne 
        </a>
</div>
<div class="first row" style={{paddingLeft: "173px"}}>
<a
          className="link"
          href="#">
         <img  src={image} className="Image" alt=""/>Acne 
        </a>
</div>
<div class="second row" style={{paddingLeft:"819px"}}>
<a
          className="link"
          href="#">
         <img  src={image} className="Image" alt=""/>Hairfall 
        </a>
</div>
<div class="first row" style={{paddingLeft: "173px"}}>
<a
          className="link"
          href="#">
         <img  src={image} className="Image" alt=""/>Hairfall
        </a>
</div>
<div class="second row" style={{paddingLeft:"819px"}}>
<a
          className="link"
          href="#">
         <img  src={image} className="Image" alt=""/>Diabetes
        </a>
</div>
<div class="first row" style={{paddingLeft: "173px"}}>
<a
          className="link"
          href="#">
         <img  src={image} className="Image" alt=""/>Diabetes
        </a>
</div> */}