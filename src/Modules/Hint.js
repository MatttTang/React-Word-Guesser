import React from 'react'
import '../styler/hint.css'

export default function Hint(props) {
    let x = props.Letters.split("");
    console.log(props.Word);
    for (let index = x.length; index < props.Word.length; index++){
        x.push("_");
    }
    return (
        <div id="hDis">
            {x.map(item =>
                <h1 className="hintDisplay">{item}</h1>)}
        </div>
    )
}
