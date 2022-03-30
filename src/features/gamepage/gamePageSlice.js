import { createSlice } from '@reduxjs/toolkit';

// We default the initial state to be the case with difficulty 'EASY', just
// as we did in HomePage.js. Instead of modifying the initial state directly
// when the difficulty is not 'EASY', we dispatch reducers to modify the initial
// state immediately afterwards
const initialState = {
  solution: 'LEARN',
  win: false,
  lose: false,

  // This state object is inspired by
  // https://redux.js.org/usage/structuring-reducers/normalizing-state-shape
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
};

export const gamePageSlice = createSlice({
  name: 'gamepage',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setWin: (state) => {
      state.win = true;
    },
    setLose: (state) => {
      state.lose = true;
    },
    // Example; to be deleted for keyboard-based reducer logic in the (near) future
    exampleReducer: (state) => {
      state.gridState.byRow.row1.validated = true;
      state.gridState.byRow.row1.letterValues = ['Y', 'E', 'A', 'R', 'N'];
      state.gridState.byRow.row1.letterColors = [
        'grey',
        'green',
        'green',
        'green',
        'green',
      ];
    },
    // TODO: update initialState based on difficulty
  },
});

export const { setWin, setLose, exampleReducer } = gamePageSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSolution = (state) => state.solution;
export const selectWin = (state) => state.win;
export const selectLose = (state) => state.lose;

// Selectors below will need to be parameterized to accommodate difficulty changes in the (near) future
export const selectValidationStatus = (state) => [
  state.gamepage.gridState.byRow.row1.validated,
  state.gamepage.gridState.byRow.row2.validated,
  state.gamepage.gridState.byRow.row3.validated,
  state.gamepage.gridState.byRow.row4.validated,
  state.gamepage.gridState.byRow.row5.validated,
  state.gamepage.gridState.byRow.row6.validated,
  state.gamepage.gridState.byRow.row7.validated,
];

export const selectRowValues = (state) => [
  state.gamepage.gridState.byRow.row1.letterValues,
  state.gamepage.gridState.byRow.row2.letterValues,
  state.gamepage.gridState.byRow.row3.letterValues,
  state.gamepage.gridState.byRow.row4.letterValues,
  state.gamepage.gridState.byRow.row5.letterValues,
  state.gamepage.gridState.byRow.row6.letterValues,
  state.gamepage.gridState.byRow.row7.letterValues,
];

export const selectRowColors = (state) => [
  state.gamepage.gridState.byRow.row1.letterColors,
  state.gamepage.gridState.byRow.row2.letterColors,
  state.gamepage.gridState.byRow.row3.letterColors,
  state.gamepage.gridState.byRow.row4.letterColors,
  state.gamepage.gridState.byRow.row5.letterColors,
  state.gamepage.gridState.byRow.row6.letterColors,
  state.gamepage.gridState.byRow.row7.letterColors,
];

export default gamePageSlice.reducer;
