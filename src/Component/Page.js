import React, {useState,useEffect}  from 'react'
import crypto from 'crypto-js'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    useLocation
  } from "react-router-dom";

const Page = (props) => {

    let location = useLocation()
    console.log("location",location);
    let url='https://dev-web.v-smart.health/admin/web/v1/events/view-events';

  let salt = "Re@$0NW#Y!@#$2020"
  let token =crypto.MD5(salt+location.state.eventId).toString();
  console.log(token)
    console.log("props",props);
  

var [eventsState, setEventsState ] = useState()
var [eventIdState, setEventIdState ] = useState(location.state.eventId)

const data={        
    "event_id": eventIdState,
    "auth_token":token
}
console.log("data",data);

useEffect (()=>{
  axios.post(url,data)
  .then(res => {
      console.log("res.data---**", res.data)
      setEventsState(res.data.parameters);
      
  })
})

console.log("eventsState",eventsState);

    return (
        <div>
            {eventsState.eventDescriptions[0].title}
        </div>
    )
}

export default Page



