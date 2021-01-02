import React, { Component } from 'react'
import RW from './word';
import {GetWord} from './Def';
import WordDisplay from './DisplayW';
import PInput from './PlayerInput';
import '../styler/input.css'
import {Redirect} from 'react-router-dom';
import { motion } from 'framer-motion';
import Time from './Timer';
import {FetchScores} from './FScore';
import {DBLink} from './DBLink';
import PV from './pageVariants';

export class PlayArea extends Component {
    state = {
        WordInfo: null,
        Word: "T",
        LowScore: null        //Timer: 0
    }
    correct = [];
    skipped = [];
    Timer = 0;
    componentDidMount(){
        let x = new DBLink();
        FetchScores(x).then(res => this.setState({LowScore: res.Items[res.Items.length - 1]}));
        this.GenerateNewWord();
        this.interval = setInterval(() =>{
            if (this.Timer > 60){
                clearInterval(this.interval);
                this.forceUpdate();
            }
            this.Timer = this.Timer + 1;
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
        console.log('unmount');
        clearInterval(this.interval);
    }

    GenerateNewWord(){
        let w = RW.GenerateWord();
        GetWord(w).then((res) =>{
            this.setState({WordInfo: res, Word: w});
            console.log(res);
        });
    }

    render() {
        if (this.Timer > 60){
            if (this.correct.length > this.state.LowScore.correct){
                // return (<Redirect to={{pathname:"/End", state:{word: this.correct, skip: this.skipped, newS: true, lowest: this.state.LowScore}}} />)
                return(
                    <motion.div
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={PV}>
                        <Redirect to={{pathname:"/End", state:{word: this.correct, skip: this.skipped, newS: true, lowest: this.state.LowScore}}} />
                    </motion.div>
                )
            }
            else{
                // return (<Redirect to={{pathname: "/End", state:{word: this.correct, skip: this.skipped, newS: false}}}/>)
                return(
                    <motion.div
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={PV}>
                        <Redirect to={{pathname: "/End", state:{word: this.correct, skip: this.skipped, newS: false}}}/>
                    </motion.div>
                )
            }
        }
        else{
            return (
                <motion.div id="pArea"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={PV}>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}>
                        <WordDisplay Info={this.state.WordInfo} />
                    </motion.div>
                    <PInput TrueWord={this.state.Word} NewWord={() => this.GenerateNewWord()} Correct={(word) => this.AddCorrect(word)} Skip={(word) => this.Skip(word)}/>
                    <Time />
                </motion.div>

            )
        }
    }
}

export default PlayArea
