import React, {useState,useEffect} from 'react'
import Home from '../Component/Home'
import Eventimg from '../Images/Event.png'
import place from '../Images/place.png'
import axios from 'axios'
import crypto from 'crypto-js'
import {
  Link
} from "react-router-dom";



const Event = () => {

  let url='https://dev-web.v-smart.health/admin/web/v1/events';

  let salt = "Re@$0NW#Y!@#$2020"
  let token =crypto.MD5(salt).toString();
   
  console.log(token)

  const data={        
    "status": "PAST",
    "auth_token":token
}
 

  var [eventsState, setEventsState ] = useState([])
useEffect (()=>{
  axios.post(url,data)
  .then(res => {
      console.log("res.data--->>", res.data)
      setEventsState(res.data.parameters);
      
  })
})





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
              <img src={Eventimg} alt="event img" width="100%"  height="150%"/>
            </div>
          </div>
        </div>
        <div class="row">
            {
              eventsState.map(data =>
                <div class="col-4" align="center">
                  <img src={place} alt="place" height="100%" width="50%"/>
                  <div>
                    <h4><b>{data.eventDescriptions[0].title}</b></h4>
                    <h6><b>{data.reg_closes_at}</b></h6>
                    
                  <h6 style={{color:"blue"}}><Link to="/Nextevent">See a Event details </Link></h6>
                  </div>
                </div>
              )
            }
           
      </div> 
    {/* <div>
      {eventsState , "data--"}
          {<ul>{eventsState.map(data => <li key = {data.event_id}>{data.eventDescriptions[0].title}</li> )}</ul>}
    </div> */}
     <div>

     </div>
     
            
</div>


    )
}

export default Event
