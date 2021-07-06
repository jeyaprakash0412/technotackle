import React from "react";
import Content from './Component/Content'
import Event from './Component/Event'
import Nextevent from "./Component/Nextevent";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
     <Router>
     <Switch>
     <Route exact path="/">
            <Content/>
          </Route>
          <Route exact path="/Event">
            <Event/>
          </Route>   
          <Route exact path="/Content">
            <Content/>
          </Route>  
          <Route exact path="/Nextevent">
            <Nextevent/>
          </Route>  
              
       </Switch>
     </Router>
    </div>
  );
}

export default App;
