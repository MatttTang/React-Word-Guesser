import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import PV from './pageVariants';

export default function instruc() {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={PV}>
            <h1>
                Instructions
            </h1>
            <p>The <strong>most common</strong> definitions for a word will be presented to you. Also provided is the character count for each word, indicated by the blanks on the screen.</p>
            <p>Typing the word correctly automatically submits it. If your guess is wrong, nothing will happen</p>
            <p>Pressing [space] will skip the current word, and bring a new word.</p>

            <Link to="/">
                <button className="mainButtons">
                    Return
                </button>
            </Link>
        </motion.div>
    )
}
