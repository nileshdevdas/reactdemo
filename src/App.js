import React, {Component} from 'react';
import MatchInfo from './MatchInfo';
import { BrowserRouter } from 'react-router-dom'
import Routes from  './Routes'
import NavigatorComponent from './Navigator';
import Footer from './Footer';
class App extends Component {
  constructor(){
    super();
  }
  render() {
    return(
        <div className="container">
            <NavigatorComponent/>
            <Routes/>
            <Footer/>
        </div>

    );
  }
}
export default App;
