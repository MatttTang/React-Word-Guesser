import React, {useState} from 'react'
import {PostS} from './PostScore';
import {Link} from 'react-router-dom';

export default function NewScore(props) {
    const [pName, setName] = useState('');
    return (
        <div>
            <h1>New Score</h1>
            <input id="nameInput" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <Link to="/">
                <button onClick={function(){
                    console.log(props.Skip);
                    PostS(pName, props.Correct, props.Skip, props.Lowest);
                }}>
                    Click
                </button>
            </Link>
        </div>
    )
}
