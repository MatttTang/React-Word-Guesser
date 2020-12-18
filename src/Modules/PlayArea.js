import React, { Component } from 'react'
import RW from './word';
import {GD} from './Def';
import WordDisplay from './DisplayW';
import PInput from './PlayerInput';
import {Spring} from 'react-spring/renderprops';
import '../styler/input.css'

export class PlayArea extends Component {
    state = {
        WordInfo: null,
        Word: "T",
        Timer: 0,
        Start: false,
    }
    correct = [];
    skipped = [];
    componentDidMount(){
        // let w = RW.GenerateWord();
        // GD.GDef(w).then((res) =>{
        //     this.setState({WordInfo: res, Word: w});
        // });
        this.GenerateNewWord();
        //this.interval = setInterval(() => this.setState({ Timer: this.state.Timer + 1}), 1000);
        this.interval = setInterval(() =>{
            if (this.state.Timer > 60){
                this.props.Finish();
            }
            this.state.Timer = this.state.Timer + 1;
        }, 1000);
    }

    AddCorrect(word){
        if (!this.correct.includes(word)){
            this.correct.push(word);
        }
    }

    Skip(word){
        if (!this.skipped.includes(word)){
            this.skipped.push(word);
        }
    }

    componentWillUnmount(){
        console.log('Finished');
        console.log(this.correct);
        console.log(this.skipped);
        this.props.LiftWords(this.correct, this.skipped);
        clearInterval(this.interval);
    }

    GenerateNewWord(){
        //  let w = RW.GenerateWord();
        //  GD.GDef(w).then((res) =>{
        //      this.setState({WordInfo: res, Word: w});
        //  })
        //  console.log(this.state.Word);
        let w = RW.GenerateWord();
        GD.GetWord(w).then((res) =>{
            this.setState({WordInfo: res, Word: w});
            console.log(res);
        });
    }

    render() {
        return (
            <div id="pArea">
                <Spring
                    from={{marginLeft: -500, opacity: 0}}
                    to={{marginLeft: 0, opacity: 1}}
                >
                    {props => (
                        <div style={props}>
                            <WordDisplay Info={this.state.WordInfo} />
                        </div>
                    )}
                </Spring>
                {/* <WordDisplay Info={this.state.WordInfo} /> */}
                <PInput TrueWord={this.state.Word} NewWord={() => this.GenerateNewWord()} Correct={(word) => this.AddCorrect(word)} Skip={(word) => this.Skip(word)}/>
                <Spring
                    from={{ number: 0, color: 'black'}}
                    to={{ number: 60, color: 'red'}}
                    config={{duration: 60000}}
                >
                    {props => (
                        <div className="timer">
                            <h3 style={props}>{props.number.toFixed(0)}</h3>
                        </div>
                    )}
                </Spring>
            </div>

        )
    }
}

export default PlayArea
