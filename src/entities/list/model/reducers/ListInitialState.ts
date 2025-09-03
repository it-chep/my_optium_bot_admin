import { IListInitialState } from "../types";




export const ListInitialState: IListInitialState = {
    list: {
        id: 0,
        name: '',
        users_count: 0,
    },
    error: '',
    isLoading: false,
}