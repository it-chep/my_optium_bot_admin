


export interface IUser {
    email: string;
    isAuth: boolean;
}

export interface IUserInitialState {
    user: IUser;
    isLoading: boolean;
    error: string;
}