// import './styler/bStyle.css';
// import Meat1 from './Modules/Meat1';

// function App() {
  // return (
  //   <div className="App">
  //     <h1 className="bTitle">
  //         Welcome To The Word Guesser
  //       </h1>
  //     <div className="mBody">
  //       <Meat1 />
  //     </div>
  //   </div>
  // );
// }

// export default App;
import React, { Component } from 'react'
import './styler/bStyle.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Menu from './Modules/Menu';
import Instructions from './Modules/instruc';
import PlayArea from './Modules/PlayArea';
import EndGame from './Modules/EndGame';
import Leader from './Modules/Score';
import NewS from './Modules/NewScore';
import { motion } from 'framer-motion';

export class App extends Component {
  state = {
    showMenu: true,
    showInstruc: false,
    showP: false,
    showEnd: false,
    showShleep: false
  }

  iToggle = e =>{
    this.setState({
      showMenu: !this.state.showMenu,
      showInstruc: !this.state.showInstruc
    });
  }

  pToggle = e =>{
    this.setState({
      showMenu: !this.state.showMenu,
      showP: !this.state.showP,
    });
  }

  sToggle = e=>{
    this.setState({
      showMenu: !this.state.showMenu,
      showShleep: !this.state.showShleep
    });
  }

  endToggle = e => {
    this.setState({
      showP: !this.state.showP,
      showEnd: !this.state.showEnd
    });
  }

  resetToggle = e => {
    this.setState({
      showP: false,
      showEnd: false,
      showInstruc: false,
      showMenu: true
    });
  }

  render() {
    {console.log(process.env.AK)}
    return (
      <Router>
        <div className="App">
          <motion.h1 className="bTitle"
            initial={{opacity: 0}}
            animate={{opacity: 1}}>
              Welcome To The Word Guesser
          </motion.h1>
        {/*}

        <Spring
          from={{opacity: 0, marginTop: -500}}
          to={{opacity: 1, marginTop: 0}}
          config={{duration: 500}}
        >
          {props => (
            <div className="mBody" style={props}>
              <Meat1 sSleep={this.state.showShleep} sPlay={this.state.showP} sMenu={this.state.showMenu} sInstruc={this.state.showInstruc} showEnd={this.state.showEnd} rToggle={this.resetToggle} iToggle={this.iToggle} pToggle={this.pToggle} eToggle={this.endToggle} sToggle={this.sToggle} />
            </div>
          )}
        </Spring> */}
          <motion.div className="mBody"
            initial={{y: -500, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5}}>
            <Switch>
              <Route exact path="/" component={Menu} />
              <Route exact path="/Instructions" component={Instructions} />
              <Route exact path="/Play" component={PlayArea} />
              <Route exact path="/End" render={(props) => <EndGame {...props}/>} />
              <Route exact path="/LeaderBoard" component={Leader} />
              <Route exact path="/NewScore" render={(props) => <NewS {...props}/>} />
            </Switch>
          </motion.div>
        </div>
      </Router>
    );
  }
}

export default App

