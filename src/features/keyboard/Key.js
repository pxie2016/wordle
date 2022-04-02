import React from 'react'
import './Keyboard.css'

function Key(props) {
    
    let className='key'
    
    if (props.class){
        className += props.class
    }
    
    return (
    <div className={className}>{props.keyValue}</div>
    )
}

export default Key