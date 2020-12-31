import React from 'react'

export default function ScoreCard(props) {
    return (
        <div>
            <h1>
                {props.Item.name}
            </h1>
            <h3>
                {props.Item.correct}
            </h3>
            <p>
                Words Correct:
            </p>
            {props.Item.cwords.values.map(word =>
                <p key={{word}}>{word}</p>)}
        </div>
    )
}
