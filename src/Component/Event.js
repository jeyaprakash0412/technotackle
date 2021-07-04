import React from 'react'
import Home from '../Component/Home'
import Eventimg from '../Images/Event.png'
import place from '../Images/place.png'
import PastEvents from './pastEvents'



const Event = () => {
    return (
        <div>
           <Home/>
           <div class="container">
  <div class="row">
    <div class="col-5 mt-5"align="left" >
    <h2 style={{color:"#2c344c"}} class="fs-1"><b> Exchanging Ever-Evolving<br></br><br></br>
      Knowledge With World<br></br> <br></br>Renowned Speakers</b></h2>
      </div>
      <div class="col-7"align="left">
          <img src={Eventimg} alt="event img" width="100%"  height="150%"/></div>
      
      
      
</div>
      </div>
      <div class="row">
          <div class="col-4" align="center">
           
        <img src={place} alt="place" height="100%" width="50%"/>
        <div>
        <h4><b>VIEW RECORDING WORKING</b></h4></div>
          </div>
          <div class="col-4" align="center">
        <img src={place} alt="placeholder" height="100%" width="50%"/>
        <div>
        <h4><b>JWT TOKEN TEST</b></h4></div>
          </div>
          <div class="col-4" align="center">
        <img src={place} alt="placeholder" height="100%" width="50%"/>
        <div>
        <h4><b>DAYS LEFT</b></h4></div>
      </div>
      </div> 
      
     
     
            
</div>


    )
}

export default Event
