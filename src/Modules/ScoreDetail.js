import React from 'react'

export default function ScoreDetail(props) {
    return (
        <div className="ScoreDetails">
            <h1>{props.Score.name}</h1>
            <p>{props.Score.correct}</p>
            <ul>
                {props.Score.cwords.values.map(item =>
                    <li key={item}>{item}</li>)}
            </ul>
            <ul>
                {props.Score.swords.values.map(item =>
                    <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}
