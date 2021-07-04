import React, {useState} from 'react'
import axios from 'axios'


const PastEvents = () => {

    var [eventsState, setEventsState ] = useState([])

    axios.post('https://dev-web.v-smart.health/admin/web/v1/events', 
    {        
        "status": "PAST",
        "auth_token": "fc30de61b7bbe57647e2c57369cacb88"
    }).then(res => {
        console.log("res.data--->>", res.data)
        setEventsState(res.data.parameters)
    })

    return (
        <div>
            <ul>{eventsState.map(data => <li key = {data.event_id}>{data.eventDescriptions[0].title}</li> )}</ul>
        </div>
    )

}

export default PastEvents
