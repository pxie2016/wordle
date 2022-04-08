import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {closeWinPop, selectWinPop, closeInvalidPop, selectLosePop, closeLosePop, selectInvalidPop, selectRowColors, selectRowValues, selectTries, selectSolution} from './gamePageSlice.js';
import Letter from '../letter/Letter.js';
import './GamePage.css';
import {Link} from "react-router-dom";
import {store} from "../../app/store";
import Popup from '../popup/Popup.js';

export function GamePage() {

    const winPopState = useSelector(state => selectWinPop(state));
    const losePopState = useSelector(state => selectLosePop(state));
    const invalidPopState = useSelector(state => selectInvalidPop(state));
    const solution = useSelector(state => selectSolution(state));

    const dispatch = useDispatch();
    console.log(store.getState());
    const tries = useSelector(selectTries);

    const renderContent = [];

    for (let i = 0; i < tries; i++) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        let values = useSelector(state => selectRowValues(state, i + 1));
        // eslint-disable-next-line react-hooks/rules-of-hooks
        let colors = useSelector(state => selectRowColors(state, i + 1));
        let content = Object.keys(values).map((element) => {
            return <Letter key={element} value={values[element]} color={colors[element]}/>
        });
        renderContent.push(
            <div className="word" key={"row" + String(i + 1)}
                 >{content}</div>
        );
    }

    return (
        <div className="gamepage">
            {renderContent}
            <Link to={"/"} className="home">Back to home</Link>
            <Popup trigger={winPopState} content="Congratulations! " close={() => dispatch(closeWinPop())}/>
            <Popup trigger={invalidPopState} content="Please enter a valid word!" close={() => dispatch(closeInvalidPop())}/>
            <Popup trigger={losePopState} content={`You lose~ The correct answer is ${solution}!!`} close={() => dispatch(closeLosePop())}/>
        </div>
    );
}
