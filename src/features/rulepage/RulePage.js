import React from "react";
import Letter from "../letter/Letter";
import './RulePage.css'
import {Link} from "react-router-dom";


export default function RulePage(){
    return (
    <div className="rulePage">
        <div className="title">Wordle Rules</div>
        <div className="ruleContainer">
        <p>Guess the WORDLE in six tries.</p>
        <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
        <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
    
    </div>
    
    <p>Examples:</p>
    
    <div className="exampleWord">
        <Letter value={"W"} color={"green"}/>
        <Letter value={"E"} color={""}/>
        <Letter value={"A"} color={""}/>
        <Letter value={"R"} color={""}/>
        <Letter value={"Y"} color={""}/>
    </div>
    
    <p>The letter W is in the word and in the correct spot.</p>
    <div className="exampleWord">
        <Letter value={"P"} color={""}/>
        <Letter value={"I"} color={"yellow"}/>
        <Letter value={"L"} color={""}/>
        <Letter value={"L"} color={""}/>
        <Letter value={"S"} color={""}/>
    </div>

    <p>The letter I is in the word but in the wrong spot.</p>
    
    <div className="exampleWord">
        <Letter value={"V"} color={""}/>
        <Letter value={"A"} color={""}/>
        <Letter value={"G"} color={""}/>
        <Letter value={"U"} color={"grey"}/>
        <Letter value={"E"} color={""}/>
    </div>

    <p>The letter U is not in the word in any spot.</p>

    <Link to={"/"} className="home">Back to home</Link>

    </div>
    )
}