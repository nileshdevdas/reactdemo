import React, { Component } from 'react';

class NavigatorComponent extends Component{
  render(){
    console.log("rendering...................")
    return (
      <nav className="navbar navbar-default navbar-inverse">
        <div className="container-fluid">
        <div className="navbar-header">
        <a className="navbar-brand" href="#">Synechron</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="/"><a href="#">Home</a></li>
        <li><a href="goals">Goals</a></li>
        <li><a href="scores">Scores</a></li>
        <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
    );
  }
}
export default NavigatorComponent;
