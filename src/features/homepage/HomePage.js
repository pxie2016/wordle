import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  goEasy,
  goMedium,
  goHard,
  selectDifficulty,
  selectWordLength,
  selectTries,
} from './homePageSlice';
import './HomePage.css';
import {Link} from "react-router-dom";

export function HomePage() {
  const difficulty = useSelector(selectDifficulty);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    difficulty: 'easy',
    wordLength: 5,
    tries: 7,
  });

  return (
    <div className="page">
      <div className="title">Wordle</div>
      <Link to={"/gamepage"} className="easy">Easy</Link>
      
      <Link to={"/gamepage"} className="medium">Medium</Link>
      <Link to={"/gamepage"} className="hard">Hard</Link>
      <Link to={"/rulepage"} className="rules">Rules</Link>
    </div>
  );
}
