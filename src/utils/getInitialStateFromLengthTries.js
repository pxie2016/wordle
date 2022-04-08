import {currentDiffDictionary} from "./currentDifficultyDictionary";

function initialRowState(wordLength) {
    let rowState = {
        validated: false,
        letterValues: {},
        letterColors: {}
    }

    for (let i = 0; i < wordLength; i++) {
        rowState.letterValues["letter" + String(i + 1)] = '';
        rowState.letterColors["letter" + String(i + 1)] = '';
    }

    return rowState;
}

// This state object is inspired by
// https://redux.js.org/usage/structuring-reducers/normalizing-state-shape
export function getInitialStateFromLengthTries(wordLength, tries) {

    let currentDictionary = currentDiffDictionary(wordLength);
    let currentDictionaryLength = currentDictionary.length;
    let randomSolution = currentDictionary[Math.floor(Math.random() * currentDictionaryLength)].toUpperCase();

    let initState = {
        difficulty: (wordLength === 5) ? 'easy' : ((wordLength === 6) ? 'medium' : 'hard'),
        wordLength: wordLength,
        tries: tries,
        solution: randomSolution,
        win: false,
        lose: false,
        winPop: false,
        losePop: false,
        invalidPop: false,
        gridState: {
            allRows: [],
            byRow: {}
        }
    }

    for (let i = 0; i < tries; i++) {
        initState.gridState.allRows.push('row' + String(i + 1));
        initState.gridState.byRow[[initState.gridState.allRows[i]]] = initialRowState(wordLength);
    }

    return initState;

}
