import React from 'react'
import {Link} from 'react-router-dom'

export default function InScore(props) {
    return (
        <div>
            {props.Scores.map(item => 
                <p key={item.id}>item id: {item.id}, item correct: {item.correct} correct: {item.cwords.values[0]}</p>)}
            <Link to="/">
                <button className="mainButtons">
                    Return
                </button>
            </Link>
        </div>
    )
}
