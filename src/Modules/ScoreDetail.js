import React from 'react'
import {motion} from 'framer-motion'

export default function ScoreDetail(props) {
    return (
        <motion.div className="ScoreDetails"
            animate={{scale: 1.1}}>
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
        </motion.div>
    )
}
