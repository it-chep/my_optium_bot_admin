import { IUserInitialState } from "../types";



export const UserInitialState: IUserInitialState = {
    user: {
        email: '',
        isAuth: false
    },
    isLoading: false,
    error: ''
} 