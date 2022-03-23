import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    difficulty: "easy",
    wordLength: 5,
    tries: 7
};

export const homePageSlice = createSlice({
    name: 'homepage',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        goEasy: (state) => {
            state.difficulty = "easy";
            state.wordLength = 5;
            state.tries = 7;
        },
        goMedium: (state) => {
            state.difficulty = "medium";
            state.wordLength = 6;
            state.tries = 6;
        },
        goHard: (state) => {
            state.difficulty = "hard";
            state.wordLength = 7;
            state.tries = 5;
        },
    },
});

export const { goEasy, goMedium, goHard } = homePageSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectDifficulty = (state) => state.difficulty;
export const selectWordLength = (state) => state.wordLength;
export const selectTries = (state) => state.tries;

export default homePageSlice.reducer;
