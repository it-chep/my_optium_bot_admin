import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInitialState } from "./UserState";




export const UserSlice = createSlice({
    name: 'user',
    initialState: UserInitialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>){
            state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string>){
            state.error = action.payload;
        },
        setIsAuth(state, action: PayloadAction<boolean>){
            state.user.isAuth = action.payload;
        },
        setEmail(state, action: PayloadAction<string>){
            state.user.email = action.payload;
        },
    }
})

export default UserSlice.reducer