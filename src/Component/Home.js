import React from 'react'
import Nav from '../Images/Nav.png'

import {
    Link
  } from "react-router-dom";
const Home = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
         
  <div class="container mt-3">
  
  <img src={Nav}alt="navbar" width="10%"height="5%"/>
    
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" >
        <Link to ="/Content"><a class="nav-link active" aria-current="page" href="#" style={{color:"blue"}}>Home</a></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" style={{color:"blue"}}>Why Attend</a>
        </li>
        <li class="nav-item">
            <Link to ="/Event">
          <a class="nav-link active" aria-current="page" style={{color:"blue"}}>Events</a></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" style={{color:"blue"}}>Speakers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{color:"blue"}}>FAQ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" style={{color:"blue"}}>About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" style={{color:"blue"}}>Contact</a>
        </li>
        
        
      </ul>
      
    </div>
<div>
<button type="button" class="btn btn-light text-info rounded-pill border border-secondary">Login</button>
</div>
<div>
<button type="button" class="btn btn-dark rounded-pill border border-secondary">Register</button>
</div>

  </div>
</nav>

        </div>
    )
}

export default Home
