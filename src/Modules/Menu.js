import React from 'react'

export default function Menu(props) {
    if (props.showMen){
        return(
            <div>
                <h1>Menu</h1>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>game</h1>
            </div>
        )
    }
}
