import React, { useState } from 'react'
import '../styler/input.css';
import Hint from './Hint';

export default function PlayerInput(props) {
    const [input, setInput] = useState('');
    const inp = document.getElementById('userInput');

    if (input.length === 1){
        inp.classList.toggle('wClass', false);
        inp.classList.toggle('cClass', false);
    }

    if (input === props.TrueWord){
        inp.classList.toggle('cClass', true);
        props.Correct(input);
        props.NewWord();
        setInput('');
        inp.value = '';
    }else if(input.length >= props.TrueWord.length){
        inp.classList.toggle('wClass', true);
        setInput('');
        inp.value = '';
    }else if (input.endsWith(' ')){
        setInput('');
        props.Skip(props.TrueWord);
        inp.value = '';
        props.NewWord();
    }

    // if (input.length >= props.TrueWord.length){
    //     inp.classList.add("wClass");
    //     setInput('');
    //     inp.value = '';
    // }

    // if (input.endsWith(' ')){
    //     setInput('');
    //     props.Skip(props.TrueWord);
    //     inp.value = '';
    //     props.NewWord();
    // }

    return (
        <div>
            <Hint Letters={input} Word={props.TrueWord}/>
            <input autoComplete='off' id="userInput" type="text" onChange={(e) => setInput(e.target.value)}/>
        </div>
    )
}


