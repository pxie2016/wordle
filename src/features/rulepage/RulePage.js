import React from "react";
import Letter from "../letter/Letter";
import './RulePage.css'
import {Link} from "react-router-dom";


export default function RulePage(){
    return (
    <div className="rulePage">
        <div className="title">Wordle Rules</div>
        <div className="ruleContainer">
        <p>Guess the WORDLE in limited tries.</p>
        <table className="rule-table">
            <thead>
                <tr>
                    <th>Difficulty</th>
                    <th>Tries</th>
                    <th>Word Length</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Easy</td>
                    <td>7</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Medium</td>
                    <td>6</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>Hard</td>
                    <td>5</td>
                    <td>7</td>
                </tr>
            </tbody>
        </table>
        <p>Each guess must be a valid word.</p>
        <p>Hit the <span className="highlight">Enter</span> button to submit.</p>
        <p>Hit the <span className="highlight">Delete</span> button to delete a letter</p>
        <p>Hit the <span className="highlight">Refresh</span> button to restart the game and try a new word.</p>
        <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
    
    </div>
    
    <p className="highlight">Examples:</p>
    
    <div className="word">
        <Letter value={"W"} color={"green"}/>
        <Letter value={"E"} color={""}/>
        <Letter value={"A"} color={""}/>
        <Letter value={"R"} color={""}/>
        <Letter value={"Y"} color={""}/>
    </div>
    
    <p>The letter W is in the word and in the correct spot.</p>
    <div className="word">
        <Letter value={"P"} color={""}/>
        <Letter value={"I"} color={"yellow"}/>
        <Letter value={"L"} color={""}/>
        <Letter value={"L"} color={""}/>
        <Letter value={"S"} color={""}/>
    </div>

    <p>The letter I is in the word but in the wrong spot.</p>
    
    <div className="word">
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