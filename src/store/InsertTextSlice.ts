import { createSlice } from "@reduxjs/toolkit";

interface InsertTextState{
    value: boolean;
}

const initialState : InsertTextState = {
    value:false,
}

// generation of the actioins
const InsertTextStateSlice = createSlice({
    name: 'InsertTextState',
    initialState,
    reducers:{
        changeValue:(state) =>{
            state.value = !state.value
        }
    }
})

export const { changeValue} = InsertTextStateSlice.actions;
export default InsertTextStateSlice.reducer;