import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    // kick' | 'snare' | 'cymbal' | 'hi-hat' | 'crash' | 'tom1' | 'tom2' | 'tom3';

    kick: [

        {value: 'bit1 kick', status: false},
        {value: 'bit2 kick', status: false},
        {value: 'bit3 kick', status: false},
        {value: 'bit4 kick', status: false},
    ],

    snare: [
        {value: 'bit5 snare', status: false},
        {value: 'bit6 snare', status: false},
        {value: 'bit7 snare', status: false},
        {value: 'bit8 snare', status: false},
    ]
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

    },
})

export const {  } = todosSlice.actions
export default todosSlice.reducer