import React, { Component } from 'react'
import SinScore from './InScore'
import {DBLink} from './DBLink'
import {FetchScores} from './FScore'

export default class Score extends Component {
    state = {
        scores: null
    }

    componentDidMount(){
        let x = new DBLink();
        FetchScores(x).then((response => this.setState({scores: response.Items})));
    }

    render(){
        if (this.state.scores === null){
            return(
                <div>
                    <h1>loading</h1>
                </div>
            )
        }
        else{
            console.log(this.state.scores);
            return(
                <div>
                    <SinScore Scores={this.state.scores} />
                </div>
            )
        }
    }
}
