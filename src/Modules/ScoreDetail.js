import React from 'react'

export default function ScoreDetail(props) {
    return (
        <div className="ScoreDetails">
            <h1>{props.Score.name}</h1>
            <p>Number of Words Correct: {props.Score.correct}</p>
            <p>Words Correct:</p>
            <ul>
                {props.Score.cwords.values.map(item =>
                    <li key={item}>{item}</li>)}
            </ul>
            <p>Words Skipped:</p>
            <ul>
                {props.Score.swords.values.map(item =>
                    <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}
