import {configureStore} from '@reduxjs/toolkit';
import CountQuestions from './CountQuestions';
import InsertTextSlice from './InsertTextSlice';

export const store = configureStore({
    reducer:{
        InsertTextSlice : InsertTextSlice,
        CountQuestions:CountQuestions,
    }
})

export type RootState = ReturnType<typeof store.getState>; // Тип для состояния.
export type AppDispatch = typeof store.dispatch; // Тип для dispatch.