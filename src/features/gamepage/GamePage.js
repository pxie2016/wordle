import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  exampleReducer,
  selectSolution,
  selectWin,
  selectLose,
  selectValidationStatus,
  selectRowValues,
  selectRowColors,
} from './gamePageSlice.js';

import Letter from '../rulepage/Letter.js';
import './GamePage.css';

export function GamePage() {
  const values = useSelector(selectRowValues);
  let row1Val = values[0];
  const colors = useSelector(selectRowColors);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    solution: 'LEARN',
    win: false,
    lose: false,

    gridState: {
      byRow: {
        row1: {
          validated: false,
          letterValues: ['', '', '', '', ''],
          letterColors: ['', '', '', '', ''],
        },
        row2: {
          validated: false,
          letterValues: ['', '', '', '', ''],
          letterColors: ['', '', '', '', ''],
        },
        row3: {
          validated: false,
          letterValues: ['', '', '', '', ''],
          letterColors: ['', '', '', '', ''],
        },
        row4: {
          validated: false,
          letterValues: ['', '', '', '', ''],
          letterColors: ['', '', '', '', ''],
        },
        row5: {
          validated: false,
          letterValues: ['', '', '', '', ''],
          letterColors: ['', '', '', '', ''],
        },
        row6: {
          validated: false,
          letterValues: ['', '', '', '', ''],
          letterColors: ['', '', '', '', ''],
        },
        row7: {
          validated: false,
          letterValues: ['', '', '', '', ''],
          letterColors: ['', '', '', '', ''],
        },
      },
      allRows: ['row1', 'row2', 'row3', 'row4', 'row5', 'row6', 'row7'],
    },
  });

  console.log(row1Val);

  return (
    <div className="gamepage" onClick={() => dispatch(exampleReducer())}>
      <div className="exampleWord">
        {row1Val.map((elem, idx) => {
          return <Letter value={row1Val[idx]} color={colors[0][idx]} />;
        })}
      </div>
    </div>
  );
}
