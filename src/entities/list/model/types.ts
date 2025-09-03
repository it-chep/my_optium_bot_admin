

export interface IList {
    id: number;
    name: string;
    users_count: number;
}

export interface IListInitialState {
    list: IList;
    error: string;
    isLoading: boolean;
}