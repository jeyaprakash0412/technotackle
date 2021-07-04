import React from 'react'
import Right from '../Images/Right.png'
import {
    Link
  } from "react-router-dom";

const Second = () => {
    return (
        <div>
            <div class="container">
  <div class="row">
    <div class="col-5 mt-5">
    <h2 style={{color:"#2c344c"}} class="fs-1"><b> Gain Tomorrow's Clincal<br></br>
      Knowledge Today</b></h2><br></br>
    
    <div>
        <h6>Reviewed Personlized Case Studies from expert in their respective field.</h6><br></br></div>
        <div>
      <h6>  Interacting with the oncologists in the real time to expand your knowledge.</h6><br></br> <br></br>
    </div>
    <div>
<button type="button" class="btn btn-primary lg rounded-pill border border-secondary p-2" >Register</button>
</div>
<div class="mt-3">
   <h5> Already a Member ?</h5>
   <a class="nav-link active" href="#" style={{color:"blue"}}>Login</a>
</div>
</div>
<div class="col-4" align="left">
    
       <img src={Right}alt="right photo" width="180%" height="150%"/>

</div></div>
<div class="col-12"align="center">
<Link to ="/Event"><button type="button" class="btn btn-primary lg rounded-pill border border-secondary" >View Events</button></Link>

</div>

    
    
    </div>
        </div>
    )
}

export default Second
