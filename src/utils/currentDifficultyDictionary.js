import {fiveLetterWords} from "../dictionaries/fiveLetterWords";
import {sixLetterWords} from "../dictionaries/sixLetterWords";
import {sevenLetterWords} from "../dictionaries/sevenLetterWords";

export function currentDiffDictionary(wordLength) {
    return (wordLength === 5) ? fiveLetterWords : ((wordLength === 6) ? sixLetterWords : sevenLetterWords);
}
