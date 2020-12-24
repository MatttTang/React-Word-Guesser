import React, { Component } from 'react'
import RW from './word';
import {GetWord} from './Def';
import WordDisplay from './DisplayW';
import PInput from './PlayerInput';
import '../styler/input.css'
import {Redirect} from 'react-router-dom';
import { motion } from 'framer-motion';
import Time from './Timer';

export class PlayArea extends Component {
    state = {
        WordInfo: null,
        Word: "T"
        //Timer: 0
    }
    correct = [];
    skipped = [];
    Timer = 0;
    componentDidMount(){
        // let w = RW.GenerateWord();
        // GD.GDef(w).then((res) =>{
        //     this.setState({WordInfo: res, Word: w});
        // });
        this.GenerateNewWord();
        //this.interval = setInterval(() => this.setState({ Timer: this.state.Timer + 1}), 1000);
        this.interval = setInterval(() =>{
            if (this.Timer === 60){
                //this.props.Finish();
                console.log('hello');
                localStorage.setItem('Correct', this.correct);
                localStorage.setItem('Skip', this.skipped);
                this.forceUpdate();
            }
            this.Timer = this.Timer + 1;
        }, 1000);
        console.log(this.Timer);
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
        //this.props.LiftWords(this.correct, this.skipped);
        clearInterval(this.interval);
        //return <Redirect to='/'/>
    }

    GenerateNewWord(){
        //  let w = RW.GenerateWord();
        //  GD.GDef(w).then((res) =>{
        //      this.setState({WordInfo: res, Word: w});
        //  })
        //  console.log(this.state.Word);
        let w = RW.GenerateWord();
        GetWord(w).then((res) =>{
            this.setState({WordInfo: res, Word: w});
            console.log(res);
        });
    }

    render() {
        if (this.Timer === 60){
            console.log('test');
            return <Redirect to={{pathname: "/End"}}/>
        }
        return (
            <div id="pArea">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}>
                    <WordDisplay Info={this.state.WordInfo} />
                {/* <Spring
                    from={{marginLeft: -500, opacity: 0}}
                    to={{marginLeft: 0, opacity: 1}}
                >
                    {props => (
                        <div style={props}>
                            <WordDisplay Info={this.state.WordInfo} />
                        </div>
                    )}
                </Spring> */}
                </motion.div>
                {/* <WordDisplay Info={this.state.WordInfo} /> */}
                <PInput TrueWord={this.state.Word} NewWord={() => this.GenerateNewWord()} Correct={(word) => this.AddCorrect(word)} Skip={(word) => this.Skip(word)}/>
                {/* <Spring
                    from={{ number: 0, color: 'black'}}
                    to={{ number: 60, color: 'red'}}
                    config={{duration: 60000}}
                >
                    {props => (
                        <div className="timer">
                            <h3 style={props}>{props.number.toFixed(0)}</h3>
                        </div>
                    )}
                </Spring> */}
                <Time />
            </div>

        )
    }
}

export default PlayArea
