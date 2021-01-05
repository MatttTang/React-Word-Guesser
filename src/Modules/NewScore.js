import React, {useState} from 'react'
import {PostS} from './PostScore';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import PV from './pageVariants';
import '../styler/ScoreSubmit.css'

export default function NewScore(props) {
    const [pName, setName] = useState('');
    return (
        <motion.div className="NewScoreForm"
            initial="initial"
            animate="in"
            exit="out"
            variants={PV}>
            <h1 id="Congrats">New Score</h1>
            <label id="nameLabel" htmlFor="nameInput">Enter Name:</label>
            <input autoComplete="off" id="nameInput" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <Link to="/">
                <button id="scoreSubmit" onClick={function(){
                    console.log(props.Skip);
                    PostS(pName, props.Correct, props.Skip, props.Lowest);
                }}>
                    Submit
                </button>
            </Link>
        </motion.div>
    )
}
