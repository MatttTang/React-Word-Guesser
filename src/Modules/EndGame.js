import React from 'react'
import {Link} from 'react-router-dom';
import NewScore from './NewScore';


export default function EndGame(props) {
    return (
        <div>
            {props.location.state.newS ? (<NewScore Correct={props.location.state.word} Skip={props.location.state.skip} Lowest={props.location.state.lowest}/>): (
                console.log('fail')
            )}
            {React.createElement('h1', null, `Words Correct: ${props.location.state.word.length}`)}
            <ul>
                {props.location.state.word.map(item => 
                    <li key={item}>{item}</li>)}
            </ul>
            {React.createElement('h1', null, `Words Skipped: ${props.location.state.skip.length}`)}
            <ul>
                {props.location.state.skip.map(item =>
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
