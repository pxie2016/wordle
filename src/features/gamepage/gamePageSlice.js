import {createSlice} from '@reduxjs/toolkit';
import {getInitialStateFromLengthTries} from '../../utils/getInitialStateFromLengthTries';
import {validateRow} from "../../utils/validateRow";
import {currentDiffDictionary} from "../../utils/currentDifficultyDictionary";

const initialState = {};

export const gamePageSlice = createSlice({
    name: 'gamepage',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        initEasy: () => {
            return getInitialStateFromLengthTries(5, 7);
        },
        initMedium: () => {
            return getInitialStateFromLengthTries(6, 6);
        },
        initHard: () => {
            return getInitialStateFromLengthTries(7, 5);
        },
        setWin: (state) => {
            state.win = true;
        },
        setLose: (state) => {
            state.lose = true;
        },
        closeWinPop: (state) => {
            state.winPop = false;
        },
        closeLosePop: (state) => {
            state.losePop = false;
        },
        closeInvalidPop: (state) => {
            state.invalidPop = false;
        },
        // Example; to be deleted for keyboard-based reducer logic in the (near) future
        exampleReducer: (state) => {
            //state.gridState.byRow[state.gridState.allRows[0]].validated = true;
            Object.assign(state.gridState.byRow[state.gridState.allRows[0]].letterValues,
                {letter1: 'L', letter2: 'E', letter3: 'A', letter4: 'R', letter5: 'N'});
            //Object.assign(state.gridState.byRow[state.gridState.allRows[0]].letterColors,
            //    {letter1: 'grey', letter2: 'green', letter3: 'green', letter4: 'green', letter5: 'green'});
        },

        letterReducer: {
            reducer: (state, action) => {
                let currActiveRow = currentActiveRowNumber(state)-1;
                if (!state.gridState.byRow[state.gridState.allRows[currActiveRow]].validated) {
                    let currentCol = currentLetter(state, currActiveRow)
                    if (currentCol <= state.wordLength) {
                        state.gridState.byRow[state.gridState.allRows[currActiveRow]].letterValues[`letter${currentCol}`] = action.payload.value;
                    }
                }
            },
            prepare: (value, row) => ({payload: {value, row}})
        },

        deleteReducer: (state) => {
            let currActiveRow = currentActiveRowNumber(state)-1;
            if (!state.gridState.byRow[state.gridState.allRows[currActiveRow]].validated) {
                let currentCol = currentLetter(state, currActiveRow)
                if (currentCol > 1) {
                    state.gridState.byRow[state.gridState.allRows[currActiveRow]].letterValues[`letter${currentCol - 1}`] = "";
                }
            }
        },

        validate: (state) => {
            let currActiveRowName = 'row' + String(currentActiveRowNumber(state));
            let currRowWord = letterValuesToWord(state, currActiveRowName);
            if (currentDiffDictionary(state.wordLength).includes(currRowWord)) {
                state.gridState.byRow[currActiveRowName].letterColors =
                    validateRow(state.gridState.byRow[currActiveRowName].letterValues, state.solution);
                state.gridState.byRow[currActiveRowName].validated = true;
            } else {
                state.invalidPop = true
            }

            let isWin = checkWin(state,currActiveRowName);
            if(isWin){
                state.win = true
                state.winPop = true
            } 
            else if (state.gridState.byRow[`row${state.tries}`].validated){
                state.lose=true
                state.losePop = true
            }
        }
    },
});

function currentLetter(state, currActiveRow) {
    let currentRow = state.gridState.byRow[state.gridState.allRows[currActiveRow]].letterValues
    let col = 1
    for (let letter of Object.values(currentRow)) {
        if (!letter) {
            break
        } else {
            col += 1
        }
    }
    return col
}

function currentActiveRowNumber(state) {
    let answer = 1;
    for (let row of state.gridState.allRows) {
        if (state.gridState.byRow[row].validated) {
            answer++;
        } else {
            return answer;
        }
    }
    return -1;
}

function letterValuesToWord(state, currActiveRow) {
    let currRowWord = '';
    for (let char of Object.values(state.gridState.byRow[currActiveRow].letterValues)) {
        currRowWord += char.toLowerCase();
    }
    return currRowWord;
}

function checkWin(state, currActiveRow){
    for (let color of Object.values(state.gridState.byRow[currActiveRow].letterColors)) {
        if(color !== 'green'){
            return false
        }
    }
    return true
}

export const {
    initEasy,
    initMedium,
    initHard,
    setLose,
    exampleReducer,
    letterReducer,
    keyBoardReducer,
    validate,
    deleteReducer,
    closeWinPop,
    closeLosePop,
    closeInvalidPop
} = gamePageSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSolution = (state) => state.gamepage.solution;
export const selectWin = (state) => state.gamepage.win;
export const selectLose = (state) => state.gamepage.lose;
export const selectWinPop = (state) => state.gamepage.winPop;
export const selectLosePop = (state) => state.gamepage.losePop;
export const selectInvalidPop = (state) => state.gamepage.invalidPop;
export const selectDifficulty = (state) => state.gamepage.difficulty;
export const selectWordLength = (state) => state.gamepage.wordLength;
export const selectTries = (state) => state.gamepage.tries;
export const selectRowValues = (state, rowNumber) => {
    return state.gamepage.gridState.byRow[state.gamepage.gridState.allRows[rowNumber - 1]].letterValues;
};
export const selectRowColors = (state, rowNumber) => {
    return state.gamepage.gridState.byRow[state.gamepage.gridState.allRows[rowNumber - 1]].letterColors;
};

export default gamePageSlice.reducer;
