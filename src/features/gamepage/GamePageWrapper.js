import React from 'react';

import './GamePageWrapper.css';
import {useParams} from "react-router-dom";
import {GamePage} from "./GamePage";
import {useDispatch} from "react-redux";
import {initEasy, initMedium, initHard} from "./gamePageSlice";
import Keyboard from "../keyboard/Keyboard";
import {store} from "../../app/store";

export function GamePageWrapper() {
    let difficultyObject = useParams();
    let currDiff = difficultyObject.difficulty;
    const dispatch = useDispatch();
    if (Object.keys(store.getState().gamepage).length === 0) {
        dispatch(currDiff === 'easy' ? initEasy() : (currDiff === 'medium') ? initMedium() : initHard());
    }

    return (
        <div className="gamepagewrapper">
            <h1>This is just a wrapper of the actual GamePage!</h1>
            <h2>The difficulty is {currDiff}</h2>
            <GamePage />

            <div>
                <Keyboard />
            </div>
        </div>
    )

}