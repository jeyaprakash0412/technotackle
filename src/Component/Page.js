import React, {useState,useEffect}  from 'react'
import crypto from 'crypto-js'
import axios from 'axios'
import Home from './Home'
import Newev from '../Images/newev.png'
import {
    BrowserRouter as Router,
    Switch,
    useLocation,
    useParams
  } from "react-router-dom";

const Page = () => {

    let {id} = useParams()
    console.log("id",id);
    let url='https://dev-web.v-smart.health/admin/web/v1/events/view-events';

    let salt = "Re@$0NW#Y!@#$2020"
    let token =crypto.MD5(salt+id).toString();
 
  

    var [eventsState, setEventsState ] = useState()

    const data={        
        "event_id": id,
        "auth_token":token
    }
    console.log("data",data);

    useEffect (()=>{    
        axios.post(url,data)
        .then(res => {
            console.log("res.data---**", res.data)
            let eventData = res.data.parameters
            setEventsState(eventData)
        })
    }, [])

    console.log("eventsState",eventsState);

    return (
        <div>
             <div><Home/></div>

             
             
             <div class="container" align="left">
             <h2 style={{color:"#2c344c"}} class="fs-1 mt-5"><b>View Recording Working <br></br></b></h2><br></br>
             <div align="center" class="mb-5">
             <img src={Newev} alt="even" width="100%"/>
             </div></div>
             <div class="container" align="left">
                 <h4> DETAILS </h4>
             </div>
             <br></br>
             <div class="container mb-5">
             
             Title :    {eventsState ? eventsState.eventDescriptions[0].title : null}<br></br>
             Language :  {eventsState ? eventsState.eventDescriptions[0].language : null}<br></br>
                
            </div>
            <div class="container" >
<button type="button" class="btn btn-light text-info rounded-pill border border-secondary">Event Completed</button>

            </div>
            <div class="container" align="left">
                 <h4> Moderator </h4>
             </div>
             <br></br>
             <div class="container" >
             {eventsState ? eventsState.moderator.first_name : null}
             {eventsState ? eventsState.moderator.last_name : null}

             </div><br></br>
             <div class="container" align="left">
                 <h4> Panelist </h4>
             </div>
             <div class="container" >
             {eventsState ? eventsState.panelist[0].first_name : null}
             {eventsState ? eventsState.panelist[0].last_name : null}
             

             </div>
            

        </div>
       
       
    
    )
}

export default Page



