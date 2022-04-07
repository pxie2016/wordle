import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {exampleReducer, selectRowColors, selectRowValues, validate} from './gamePageSlice.js';
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


  // add a new example line to connect with keyboard
  const values2 = useSelector(state => selectRowValues(state, 2));
  const colors2 = useSelector(state => selectRowColors(state, 2));

  let content2 = Object.keys(values2).map((element) => {
    return <Letter key={element} value={values2[element]} color={colors2[element]} />
});


  return (
    <div className="gamepage" >

      <div className="exampleWord" onClick={() => {
          dispatch(exampleReducer());
          dispatch(validate());
      }}>
          {content}
      </div>

      <div className="exampleWord" onClick={() => {
          dispatch(validate());
      }}>
          {content2}
      </div>

      <Link to={"/"} className="home">Back to home</Link>
    </div>
  );
}
