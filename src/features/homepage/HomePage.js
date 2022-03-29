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
      <div className="easy">Easy</div>
      <div className="medium">Medium</div>
      <div className="hard">Hard</div>
      <div className="rules">Rules</div>
    </div>
  );
}
