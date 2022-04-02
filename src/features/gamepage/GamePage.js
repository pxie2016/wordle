import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {exampleReducer, selectRowColors, selectRowValues} from './gamePageSlice.js';

import Letter from '../letter/Letter.js';
import './GamePage.css';
import {Link} from "react-router-dom";
import {store} from "../../app/store";

export function GamePage() {

  const dispatch = useDispatch();
  console.log(store.getState());

  const values = useSelector(state => selectRowValues(state, 1));
  const colors = useSelector(state => selectRowColors(state, 1));

  let content = Object.keys(values).map((element) => {
      return <Letter key={element} value={values[element]} color={colors[element]} />
  });

  return (
    <div className="gamepage" onClick={() => dispatch(exampleReducer())}>
      <div className="exampleWord">
          {content}
      </div>
      <Link to={"/"} className="home">Back to home</Link>
    </div>
  );
}
