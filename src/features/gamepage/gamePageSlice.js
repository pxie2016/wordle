import {createSlice} from '@reduxjs/toolkit';
import {getInitialStateFromLengthTries} from '../../utils/getInitialStateFromLengthTries';
import {fiveLetterWords} from "../../dictionaries/fiveLetterWords";
import {sixLetterWords} from "../../dictionaries/sixLetterWords";
import {sevenLetterWords} from "../../dictionaries/sevenLetterWords";
import {validateRow} from "../../utils/validateRow";

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
                let currentRow = state.gridState.byRow[state.gridState.allRows[action.payload.row]].letterValues
                let col = 1
                for (let letter of Object.values(currentRow)){
                    if (!letter){
                        break
                    } else {
                        col+=1
                    }
                }
                if(col <= state.wordLength){
                state.gridState.byRow[state.gridState.allRows[action.payload.row]].letterValues[`letter${col}`] = action.payload.value;
                }
            },
            prepare: (value, row, col) => ({payload: {value, row, col}})
        },

        validate: (state) => {
            let currActiveRowName = 'row' + String(currentActiveRowNumber(state));
            let currRowWord = letterValuesToWord(state, currActiveRowName);
            if (currentDiffDictionary(state).includes(currRowWord)) {
                state.gridState.byRow[currActiveRowName].letterColors =
                    validateRow(state.gridState.byRow[currActiveRowName].letterValues, state.solution);
                state.gridState.byRow[currActiveRowName].validated = true;
            }
        }
    },
});

function currentActiveRowNumber(state) {
    let answer = 1;
    for (let row of state.gridState.allRows) {
        if (state.gridState.byRow[row].validated) {answer++;}
        else {return answer;}
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

function currentDiffDictionary(state) {
    return (state.difficulty === 'easy') ? fiveLetterWords : ((state.difficulty === 'medium') ? sixLetterWords : sevenLetterWords);
}

export const {
    initEasy,
    initMedium,
    initHard,
    setLose,
    exampleReducer,
    letterReducer,
    keyBoardReducer,
    validate
} = gamePageSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSolution = (state) => state.solution;
export const selectWin = (state) => state.win;
export const selectLose = (state) => state.lose;
export const selectDifficulty = (state) => state.difficulty;
export const selectWordLength = (state) => state.wordLength;
export const selectTries = (state) => state.tries;
export const selectRowValues = (state, rowNumber) => {
    return state.gamepage.gridState.byRow[state.gamepage.gridState.allRows[rowNumber - 1]].letterValues;
};
export const selectRowColors = (state, rowNumber) => {
    return state.gamepage.gridState.byRow[state.gamepage.gridState.allRows[rowNumber - 1]].letterColors;
};

export default gamePageSlice.reducer;
