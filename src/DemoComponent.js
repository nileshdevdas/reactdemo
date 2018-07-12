import React, { Component } from 'react';
class DemoComponent extends Component{
  a = 10;
  constructor(){
    super();
    console.log("heereeeee.....")
    this.state = {username: "synechron",     password : "xxxxxxx"}
  }
  // write a simple method called handleEvents
  handleEvent(event){
    console.log("Event Fired.... ", event)
    console.log(this);
    fetch("http://www.google.com").then(function(result){
        console.log(result);
    })
    this.a = 20;
      this.setState({
        username : "abcbcbbbc"
      })
  }
  componentWillMount(){
      console.log("here")
  }
  componentDidMount(){
    // after render
    console.log("here too")
  }
  render(){
    console.log("rendering...................")
    return (
      <div onClick={this.handleEvent.bind(this)}>Cool  {this.state.username} && {this.state.password}</div>
    );
  }
}
export default DemoComponent;
