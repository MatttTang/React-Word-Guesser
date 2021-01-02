import React from 'react'
import NewScore from './NewScore';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion';
import PV from './pageVariants'


export default function EndGame(props) {
    console.log('test');
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={PV}>
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
            {props.location.state.newS ? (null) : (
                <Link to="/">
                    <button className="mainButtons">
                        Return
                    </button>
                </Link>
            )}
        </motion.div>
    )
}
