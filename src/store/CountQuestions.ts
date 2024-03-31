import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CountQuestionsState{
    value:number;
}

const initialState : CountQuestionsState = {
    value:0,
}

const  CountQuestionsStateSlice= createSlice({
    name: 'countQuestionsState',
    initialState,
    reducers: {
        changeCounterValue: (state, action: PayloadAction<number>) => {
        state.value = action.payload;
        }
    }
});
export const { changeCounterValue} = CountQuestionsStateSlice.actions;
export default CountQuestionsStateSlice.reducer;