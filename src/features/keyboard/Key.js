import React from 'react'
import './Keyboard.css'
import {useDispatch} from "react-redux";
import {letterReducer, deleteReducer, validate} from "../gamepage/gamePageSlice";

function Key(props) {

    let className = 'key'
    let letter = props.keyValue
    if (props.class) {
        className += props.class
        letter = ''
    }
    const dispatch = useDispatch();

    function handleOnclick(letter) {
        if (props.class) {
            if (props.keyValue === "Delete") {
                dispatch(deleteReducer())
            } else {
                dispatch(validate())
            }

        } else {
            dispatch(letterReducer(letter, 0, 1))
        }

    }

    return (
        <div className={className} onClick={() => handleOnclick(letter)}>{props.keyValue}</div>
    )
}

export default Key