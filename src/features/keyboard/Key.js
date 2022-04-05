import React from 'react'
import './Keyboard.css'
import {useDispatch} from "react-redux";
import {letterReducer} from"../gamepage/gamePageSlice";
function Key(props) {
    
    let className='key'
    let letter = props.keyValue
    if (props.class){
        className += props.class
        letter = ''
    }
    const dispatch = useDispatch();

    
    function handleOnclick(letter){
        //TODO1: change hardcoded position(row2,letter1) to real-time game position
        dispatch(letterReducer(letter,1,1))
        //TODO2: implement enter and delete key
    }

    return (
    <div className={className} onClick={()=>handleOnclick(letter)}>{props.keyValue}</div>
    )
}

export default Key