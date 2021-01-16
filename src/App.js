import React,{useEffect} from 'react'
import User from "./User"
import Admin from "./Admin"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import DataObj from "./Data"

function App() {
  
  return (
    <div>
      <Router>
      <Switch>
          <Route exact path="/" >
            <User/>
          </Route>
          <Route exact path="/admin" >
            <Admin/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  )
}

export default App
