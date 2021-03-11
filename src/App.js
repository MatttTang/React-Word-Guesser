import React from 'react'
import './styler/bStyle.css';
import {Route, Switch, useLocation} from 'react-router-dom';
import Menu from './Modules/Menu';
import Instructions from './Modules/instruc';
import PlayArea from './Modules/PlayArea';
import EndGame from './Modules/EndGame';
import Leader from './Modules/Score';
import NewS from './Modules/NewScore';
import { AnimatePresence } from 'framer-motion';
import Secret from './Modules/SecretMove';

function App(){
  const location = useLocation();
    return (
        <div className="App">
            <h1 className="bTitle">
                Welcome To The Word Guesser
            </h1>

          <div id="mainBody" className="mBody">
          <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route exact path="/" component={Menu}/>
                <Route exact path="/Instructions" component={Instructions} />
                <Route exact path="/Play" component={PlayArea} />
                {/* <Route exact path="/End" component={EndGame} render={(props) => <EndGame {...props}/>} /> */}
                <Route exact path="/End" component={EndGame}/>
                <Route exact path="/LeaderBoard" component={Leader} />
                <Route exact path="/NewScore" render={(props) => <NewS {...props}/>} />
                <Route exact path="/Secret" component={Secret}/>
              </Switch>
          </AnimatePresence>
          </div>
          <div style={{padding: '3vh'}}>

          </div>
        </div>
    );
}

export default App;

