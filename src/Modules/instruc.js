import React from 'react';
import {Link} from 'react-router-dom';

export default function instruc() {
    return (
        <div>
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
        </div>
    )
}
