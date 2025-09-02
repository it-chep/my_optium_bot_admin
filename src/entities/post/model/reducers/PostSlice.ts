import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostInitialState } from "./PostInitialState";



export const PostSlice = createSlice({
    name: 'post',
    initialState: PostInitialState,
    reducers: {
        setName(state, action: PayloadAction<string>){
            state.post.name = action.payload;
        },
        setInitialState(state, action: PayloadAction<void>){
            state.post = PostInitialState.post;
        },
        setIsRequired(state, action: PayloadAction<boolean>){
            state.post.is_theme_required = action.payload;
        }
    }
})

export default PostSlice.reducer