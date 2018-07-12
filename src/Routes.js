import React from 'react'
import { BrowserRouter as Router, Route, NavLink,Switch } from "react-router-dom";
import Scores from './Scores';
import Goals from './Goals';
import HomeComponent from './home';
const Routes= () => (
  <Router>
    <Switch>
      <Route exact path='/' component={HomeComponent}/>
      <Route path='/scores' component={Scores}/>
      <Route path='/goals' component={Goals}/>
    </Switch>
  </Router>
)

export default Routes
