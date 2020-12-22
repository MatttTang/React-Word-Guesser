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
    document.title = "Word Test";
    console.log(`Show End: ${this.state.showEnd}`)
    console.log(`Show Play: ${this.state.showP}`)
    console.log(`Show Menu: ${this.state.showMenu}`)
    console.log(`Show Instruc: ${this.state.showInstruc}`)
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
              <Meat1 sSleep={this.state.showShleep} sPlay={this.state.showP} sMenu={this.state.showMenu} sInstruc={this.state.showInstruc} showEnd={this.state.showEnd} rToggle={this.resetToggle} iToggle={this.iToggle} pToggle={this.pToggle} eToggle={this.endToggle} sToggle={this.sToggle} />
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

export default App

