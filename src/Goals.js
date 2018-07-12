import React , {Component} from 'react';
import EventBus from './EventBus';

class Goals extends Component{

  componentWillMount(){
    EventBus.getEventEmmiter().on("someevent", function(data){
      console.log("gettin g event.")
      this.setState(data)
    }.bind(this));

  }

   render(){
     return (
        <div className="jumbotron">Text, rich text and HTML elements
You use text, rich text and HTML elements to store blocks of text, but each has slightly different properties.
Creating an element
See Adding elements to an item for further information on adding an element to an authoring template, site, site area or content item.
See Creating components for further information on how to create a component.
Text element</div>

     );
   }
}
export default Goals;
