import React from 'react'
import {motion} from 'framer-motion'

export default function ScoreDetail(props) {
    return (
        <motion.div className="ScoreDetails"
            animate={{scale: 1.1}}>
            <div style={{textAlign: 'center'}}>
                <h1>{props.Score.name}</h1>
                <p>Number of Words Correct: {props.Score.correct}</p>
            </div>

            <p>Words Correct:</p>
            <div id ="correctWords">
                <ul>
                    {props.Score.cwords.values.map(item =>
                        <li key={item}>{item}</li>)}
                </ul>
            </div>
            <p>Words Skipped: {props.Score.swords.values.length}</p>
            <div id="skippedWords">
                <ul>
                    {props.Score.swords.values.map(item =>
                        <li key={item}>{item}</li>)}
                </ul>
            </div>
        </motion.div>
    )
}
