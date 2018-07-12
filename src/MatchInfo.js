import React, {Component} from 'react';
import Scores from './Scores';
import EventBus from './EventBus';
import Routes from './Routes';
class MatchInfo extends Component {
  constructor() {
    super();
    this.state = {
      country: "US"
    };
  }
  handleEvent(event) {
    this.setState({country: event.target.options[event.target.selectedIndex].value})
  }
  render() {
    return (<div>
      <div>MatchInfo
        <hr/>
        <select onChange={this.handleEvent.bind(this)}>
          <option>England</option>
          <option>Belgium</option>
          <option>France</option>
          <option>Croatia</option>
        </select>
      </div>
    </div>);
  }
}
export default MatchInfo;
