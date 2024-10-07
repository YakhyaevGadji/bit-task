import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface TypeInitialState {

}

const initialState: TypeInitialState = {

}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

    },
})

export const {  } = todosSlice.actions
export default todosSlice.reducer