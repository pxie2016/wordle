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


/*
const initialState = {
    solution: 'LEARN',
    win: false,
    lose: false,

    // This state object is inspired by
    // https://redux.js.org/usage/structuring-reducers/normalizing-state-shape
    gridState: {
        allRows: ['row1', 'row2', 'row3', 'row4', 'row5', 'row6', 'row7'],
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
    },
} */
