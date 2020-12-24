import React from 'react'
import {Link} from 'react-router-dom';


export default function EndGame() {
    let x = localStorage.getItem("Correct").split(",");
    let y = localStorage.getItem("Skip").split(",");
    return (
        <div>
            {React.createElement('h1', null, `Words Correct: ${x.length}`)}
            <ul>
                {x.map(item => 
                    <li key={item}>{item}</li>)}
            </ul>
            {React.createElement('h1', null, `Words Skipped: ${y.length}`)}
            <ul>
                {y.map(item =>
                    <li key={item}>{item}</li>)}
            </ul>
            <Link to="/">
                <button className="mainButtons">
                    Return
                </button>
            </Link>
        </div>
    )
}
