import React from 'react'

export default function EndGame(props) {
    return (
        <div>
            {React.createElement('h1', null, `Words Correct: ${props.Correct.length}`)}
            <ul>
                {props.Correct.map(item => 
                    <li key={item}>{item}</li>)}
            </ul>
            {React.createElement('h1', null, `Words Skipped: ${props.Skip.length}`)}
            <ul>
                {props.Skip.map(item =>
                    <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}
