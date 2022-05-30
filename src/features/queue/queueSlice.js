import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const queueSlice = createSlice({
    name: 'queue',
    initialState,
    reducers: {
        movieAdded(state, action){
            const existingMovie = state.find(queue => queue.title === action.payload.title)
            if(!existingMovie){
                state.push(action.payload)
            }
        },
        movieRemoved(state, action){
            const existingMovie = state.find(queue => queue.title === action.payload.title)
            if(existingMovie){
              return  state.filter(movie => movie.title !== action.payload.title);
            }
        }
    }
})

export const {movieAdded} = queueSlice.actions
export const {movieRemoved} = queueSlice.actions

export default queueSlice.reducer