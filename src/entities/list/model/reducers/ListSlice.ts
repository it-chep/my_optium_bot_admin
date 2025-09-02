import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListInitialState } from "./ListInitialState";
import { IList } from "../types";



export const ListSlice = createSlice({
    name: 'list',
    initialState: ListInitialState,
    reducers: {
        setName(state, action: PayloadAction<string>){
            state.list.name = action.payload;
        },
        setList(state, action: PayloadAction<IList>){
            state.list = action.payload;
        },
        setInitialState(state, action: PayloadAction<void>){
            state.list = ListInitialState.list;
        },
    }
})

export default ListSlice.reducer