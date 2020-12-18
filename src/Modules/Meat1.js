import React from 'react';
import { Spring } from 'react-spring/renderprops';
import PArea from './PlayArea';
import Instructions from './instruc';


class Meat1 extends React.Component{
    state = {
        WCorrect: [],
        WSkip: []
    }

    // componentDidMount(){
    //     let w = RW.GenerateWord();
    //     GD.GDef(w).then((res) =>{
    //         this.setState({CurrentW: res, Word: w});
    //     })
    //     console.log(this.state.CurrentW);
    //     console.log(this.state.Word);
    // }

    // Checker = e =>{
    //     let w = RW.GenerateWord();
    //     GD.GDef(w).then((res) =>{
    //         this.setState({CurrentW: res[0], Word: w});
    //     })
    // }

    // Logger = e => {
    //     console.log(this.state.CurrentW.shortdef);
    //     console.log(this.state.Word);
    // }

    PlayB = e => {
        this.props.pToggle();
    }

    gToggle = e => {
        this.props.eToggle();
    }

    LiftWords(wc, ws){
        this.state.WCorrect = wc;
        this.state.WSkip = ws;
        this.forceUpdate();
        console.log(this.state.WCorrect);
    }

    render(){
        if (this.props.sMenu && !this.props.sInstruc){
            return (
                <div className="M1">
                        <Spring
                            from={{marginLeft: -500}}
                            to={{marginLeft: 0}}
                            config={{duration: 500}}
                        >
                            {props => (
                                <div className="content" style={props}>
                                    <button className="mainButtons" /*onClick={this.props.pToggle}*/ onClick={this.PlayB}>
                                        Play
                                    </button>
                                    <button className="mainButtons" onClick={this.props.iToggle}>
                                        Instuctions
                                    </button>
                                </div>
                            )}
                        </Spring>
                </div>
            )
        }
        else if (!this.props.sMenu && this.props.sInstruc){
            return(
                <div className="M1">
                    <div className="content">
                        <Instructions />
                        {/* <h1>
                            Instructions
                        </h1>
                        <p>
                            You will be given various definitions for words, and your job is to type in the word that matches
                            the definition.
                        </p>
                        <p>
                            [Enter] submits your guess
                        </p>
                        <p>
                            [Space] will skip the word
                        </p> */}
                        <Spring
                            from={{marginLeft: -500}}
                            to={{marginLeft: 0}}
                            config={{duration: 500}}
                        >
                            {props => (
                                <div style={props}>
                                    <button className="mainButtons" onClick={this.props.iToggle}>
                                        Return
                                    </button>
                                </div>
                            )}
                        </Spring>
                    </div>
                </div>
            )
        }
        else if (this.props.sPlay){
            return(
                <div className="M1" id="gamePlay">
                    <PArea Finish={this.gToggle} LiftWords={(wc, ws) => this.LiftWords(wc, ws)}/>
                    {/* <WordDisplay Info={this.state.CurrentW}/>
                    <h1>Play</h1>
                    <PInput TrueWord={this.state.Word} /> */}
                    {/* <button onClick={this.Checker}>Check</button>
                    <button onClick={this.Logger}>Log</button> */}
                </div>
            )
        }
        else if (this.props.showEnd){
            return(
                <div>
                    {React.createElement('h1', null, `Words Correct: ${this.state.WCorrect.length}`)}
                    <ul>
                        {this.state.WCorrect.map(item =>
                            <li key="{item}">{item}</li>)
                        }
                    </ul>

                    {React.createElement('h1', null, `Words Skipped: ${this.state.WSkip.length}`)}
                    <ul>
                        {this.state.WSkip.map(item =>
                            <li key={item}>{item}</li>)
                        }
                    </ul>
                </div>
            )
        }
    }
}

export default Meat1;