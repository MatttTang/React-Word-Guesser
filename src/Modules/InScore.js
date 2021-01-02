import React from 'react'
import {Link} from 'react-router-dom'
import ScoreCard from './ScoreCard'

export default function InScore(props) {
    console.log(props.Scores);
    return (
        <div style={{display: 'inline'}}>
            {/* {props.Scores.map(item => 
                <p key={item.id}>Name: {item.name}, Correct Words: {item.correct} correct: {item.cwords.values}</p>)} */}
            {props.Scores.map(item =>
                <ScoreCard key={item.id} Item={item} />)}
            <Link to="/">
                <button className="mainButtons">
                    Return
                </button>
            </Link>
        </div>
    )
}
