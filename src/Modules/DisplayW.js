import React from 'react'
import '../styler/dStyler.css'

export default function DisplayW(props) {
    if (props.Info !== null){
        var x = [];
        let pSpeech = null;
        for (let index = 0; index < props.Info.length; index++){
            if (props.Info[index].shortdef.length >= 1){
                for (let j = 0; j < Math.min(props.Info[index].shortdef.length, 3); j++){
                    x.push(React.createElement("p", {key: j}, `${props.Info[index].shortdef[j]}`));
                }
                pSpeech = props.Info[index].fl;
                break;
            }
        }
        return(
            <div id="defineArea">
                <h1>Part of Speech:</h1>
                <h3>{pSpeech}</h3>
                {x.map(item => <p className="definitions"><strong>Definition:</strong>{item}</p>)}
            </div>
        )
    }
    else{
        return(
            <div>

            </div>
        )
    }
}
