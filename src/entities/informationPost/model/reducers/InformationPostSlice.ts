import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInformationPostData } from "../types";
import { InformationPostInitialState } from "./InformationPostInitialState";




export const InformationPostSlice = createSlice({
    name: 'informationPost',
    initialState: InformationPostInitialState,
    reducers: {
        setName(state, action: PayloadAction<string>){
            state.informationPost.post_name = action.payload;
        },
        setInformationPostData(state, action: PayloadAction<IInformationPostData>){
            state.informationPost = action.payload;
        },
        setInitialState(state, action: PayloadAction<void>){
            state.informationPost = InformationPostInitialState.informationPost;
        },
        setContentTypeId(state, action: PayloadAction<number>){
            state.informationPost.content_type_id = action.payload;
        },
        setThemeId(state, action: PayloadAction<number>){
            state.informationPost.theme_id = action.payload;
        },
        setMediaId(state, action: PayloadAction<string>){
            state.informationPost.media_id = action.payload;
        },
        setOrder(state, action: PayloadAction<number>){
            state.informationPost.order = action.payload;
        },
        setMessage(state, action: PayloadAction<string>){
            state.informationPost.message = action.payload;
        },
        
    }
})

export default InformationPostSlice.reducer