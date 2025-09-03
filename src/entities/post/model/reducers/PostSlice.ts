import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostInitialState } from "./PostInitialState";
import { IPost } from "../types";



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
        },
        setPost(state, action: PayloadAction<IPost>){
            state.post = action.payload;
        },
    }
})

export default PostSlice.reducer