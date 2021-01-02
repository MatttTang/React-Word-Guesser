import React, { Component } from 'react'
import {DBLink} from './DBLink'
import {FetchScores} from './FScore'
import '../styler/Scores.css'
import ScoreDetail from './ScoreDetail'
import {Link} from 'react-router-dom'

export default class Score extends Component {
    state = {
        scores: null,
        displayScore: null,
        display: false
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
            return(
                <div style={{display: 'inline'}}>
                    {/* <SinScore Scores={this.state.scores} /> */}
                    {this.state.scores.map(item =>
                        <h1 onMouseEnter={(e) => this.setState({displayScore: item, display: true})} key={item.id}>{item.name}</h1>)}

                    <section>
                        {this.state.display ? (<ScoreDetail Score={this.state.displayScore} />) : <h1>none</h1>}
                    </section>
                    
                    <Link to="/">
                        <button className="mainButtons">
                            Return
                        </button>
                    </Link>


                </div>
            )
        }
    }
}
