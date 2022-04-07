import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {exampleReducer, selectRowColors, selectRowValues, selectTries, validate} from './gamePageSlice.js';
import Letter from '../letter/Letter.js';
import './GamePage.css';
import {Link} from "react-router-dom";
import {store} from "../../app/store";

export function GamePage() {

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
            <div className="exampleWord" key={"row" + String(i + 1)}
                 onClick={() => dispatch(validate())}>{content}</div>
        );
    }

    return (
        <div className="gamepage">
            {renderContent}
            <Link to={"/"} className="home">Back to home</Link>
        </div>
    );
}
