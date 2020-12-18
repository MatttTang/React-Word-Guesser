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
import Meat1 from './Modules/Meat1';
import { Spring } from 'react-spring/renderprops';

export class App extends Component {
  state = {
    showMenu: true,
    showInstruc: false,
    showP: false,
    showEnd: false
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
      showP: !this.state.showP
    });
  }

  endToggle = e => {
    this.setState({
      showP: !this.state.showP,
      showEnd: !this.state.showEnd
    });
  }

  render() {
    document.title = "Word Test";
    return (
      <div className="App">
        <h1 className="bTitle">
            Welcome To The Word Guesser
        </h1>

        <Spring
          from={{opacity: 0, marginTop: -500}}
          to={{opacity: 1, marginTop: 0}}
          config={{duration: 500}}
        >
          {props => (
            <div className="mBody" style={props}>
              <Meat1 sPlay={this.state.showP} sMenu={this.state.showMenu} sInstruc={this.state.showInstruc} showEnd={this.state.showEnd} iToggle={this.iToggle} pToggle={this.pToggle} eToggle={this.endToggle}/>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

export default App

