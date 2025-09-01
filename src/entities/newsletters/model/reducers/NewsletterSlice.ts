import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsletterDataInitialState } from "./NewsletterState";
import { INewsletterData } from "../types";


export const NewsletterSlice = createSlice({
    name: 'newsletter',
    initialState: NewsletterDataInitialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>){
            state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string>){
            state.error = action.payload;
        },
        setNewsletter(state, action: PayloadAction<INewsletterData>){
            state.newsletterData = action.payload;
        },
        setName(state, action: PayloadAction<string>){
            state.newsletterData.name = action.payload;
        },
        setUsersLists(state, action: PayloadAction<number[]>){
            state.newsletterData.users_lists = action.payload;
        },
        setText(state, action: PayloadAction<string>){
            state.newsletterData.text = action.payload;
        },
        setMediaId(state, action: PayloadAction<string>){
            state.newsletterData.media_id = action.payload;
        },
        setСontentTypeId(state, action: PayloadAction<number>){
            state.newsletterData.content_type_id = action.payload;
        }
    }
})

export default NewsletterSlice.reducer