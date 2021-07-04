import React from 'react'
import React,{useState,useEffect} from 'react'

const Axios = () => {
    const axios = require('axios');

    
    
      axios.post('/https://dev-web.v-smart.health/admin/web/v1/events?status=ACTIVE&auth_token=e237f60abef8e44f43c71e1faf0692f1', {
            "status": "PAST",
            "auth_token": "fc30de61b7bbe57647e2c57369cacb88"
        })
         
    }
    return (
        <div>
            <p>hello world</p>
        </div>
    )


export default Axios
