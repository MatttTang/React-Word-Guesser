import React, {useState} from 'react'
import {PostS} from './PostScore';

export default function NewScore(props) {
    const [pName, setName] = useState('');
    return (
        <div>
            <h1>New Score</h1>
            <input id="nameInput" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <button onClick={function(){
                console.log(props.Skip);
                PostS(pName, props.Correct, props.Skip);
            }}>
                Click
            </button>
        </div>
    )
}
