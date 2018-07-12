import React , {Component} from 'react';
import EventBus from './EventBus';
class Ranking extends Component{
  componentWillMount(){
    EventBus.getEventEmmiter().on("xxxx", this.handleSomeCallBack.bind(this));
  }
  handleSomeCallBack(){
  }
   render(){
     return (
        <div>Ranking {this.props.country}</div>
     );
   }
}
export default Ranking;
