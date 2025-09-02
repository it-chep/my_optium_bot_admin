import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListInitialState } from "./ListInitialState";



export const ListSlice = createSlice({
    name: 'list',
    initialState: ListInitialState,
    reducers: {
        setName(state, action: PayloadAction<string>){
            state.list.name = action.payload;
        }
    }
})

export default ListSlice.reducer