// TODO: Adjust this into a reducer as appropriate
export function validateRow(letterValue, truth) {
    let wordLength = truth.length;
    let outputColor = {};
    let truthValue = {};
    let truthCount = {};

    for (let i = 0; i < wordLength; i++) {
        let truthCurrChar = truth.charAt(i);
        let currKey = 'letter' + String(i + 1);
        truthValue[currKey] = truthCurrChar;

        if (truthCurrChar in truthCount) {
            truthCount[truthCurrChar]++;
        } else {
            truthCount[truthCurrChar] = 1;
        }
    }

    for (let i = 0; i < wordLength; i++) {
        let currKey = 'letter' + String(i + 1);
        let letterValueCurrChar = letterValue[currKey];

        if (letterValue[currKey] === truthValue[currKey]) {
            outputColor[currKey] = 'green';
            truthCount[letterValueCurrChar]--;
        } else if (!(letterValue[currKey] in truthCount)) {
            outputColor[currKey] = 'grey';
        } else if (truthCount[letterValue[currKey]] > 0) {
            outputColor[currKey] = 'yellow';
            truthCount[letterValueCurrChar]--;
        } else {
            outputColor[currKey] = 'grey';
        }
    }

    return outputColor;
}