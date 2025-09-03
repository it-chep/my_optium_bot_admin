import { IPostInitialState } from "../types";



export const PostInitialState: IPostInitialState = {
    post: {
        id: -1,
        name: '',
        is_theme_required: false,
    },
    isLoading: false,
    error: ''
}