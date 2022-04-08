import React from 'react';

import './GamePageWrapper.css';
import {useParams} from "react-router-dom";
import {GamePage} from "./GamePage";
import {useDispatch} from "react-redux";
import {initEasy, initMedium, initHard} from "./gamePageSlice";
import {store} from "../../app/store";
import {saveState} from "../../localStorage";

export function GamePageWrapper() {
    let difficultyObject = useParams();
    let pageDiff = difficultyObject.difficulty;
    const dispatch = useDispatch();
    if (Object.keys(store.getState().gamepage).length === 0 || store.getState().gamepage.difficulty !== pageDiff) {
        dispatch(pageDiff === 'easy' ? initEasy() : (pageDiff === 'medium') ? initMedium() : initHard());
    }
    store.subscribe(() => {
            saveState(store.getState());
        }
    );

    return (
        <div className="gamepagewrapper">
            <div className='title'>Wordle</div>
            <GamePage/>
        </div>
    )

}