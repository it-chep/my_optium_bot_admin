


export interface IPost{
    id: number;
    name: string;
    is_theme_required: boolean;
}

export interface IPostInitialState{
    post: IPost;
    error: string;
    isLoading: boolean;
}