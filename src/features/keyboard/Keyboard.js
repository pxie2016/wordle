import React from 'react'
import './Keyboard.css'
import Key from './Key'
import {useSelector} from "react-redux";
import {selectLose, selectWin} from "../gamepage/gamePageSlice";

function Keyboard() {
    const isWin = useSelector(selectWin);
    const isLose = useSelector(selectLose);
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"]

    if (!isWin && !isLose) {
        return (
            <div className="keyboard">
                <div className='line'>
                    {keys1.map((key) => {
                        return <Key key={key} keyValue={key}/>;
                    })}
                </div>

                <div className='line'>
                    {keys2.map((key) => {
                        return <Key key={key} keyValue={key}/>;
                    })}
                </div>

                <div className='line'>
                    <Key keyValue={'Enter'} class={' func'}/>
                    {keys3.map((key) => {
                        return <Key key={key} keyValue={key}/>;
                    })}
                    <Key keyValue={'Delete'} class={' func'}/>
                </div>

            </div>
        )
    } else return null;
}

export default Keyboard;