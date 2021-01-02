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
import Secret from './Modules/SecretMove';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <motion.h1 className="bTitle"
            initial={{opacity: 0}}
            animate={{opacity: 1}}>
              Welcome To The Word Guesser
          </motion.h1>

          <motion.div id="mainBody" className="mBody"
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
              <Route exact path="/Secret" component={Secret}/>
            </Switch>
          </motion.div>
        </div>
      </Router>
    );
  }
}

export default App

