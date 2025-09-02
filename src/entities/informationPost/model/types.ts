


export interface IInformationPost {
    id: number;
    name: string;
    theme_name: string;
    order: number;
    is_theme_required: boolean;
}

export interface IInformationPostData {
    id?: number;
    post_name: string;
    theme_id: number;
    order: number;
    message: string;
    media_id: string;
    content_type_id: number;
}

export interface IInformationPostDataInitialState {
    informationPost: IInformationPostData;
    isLoading: boolean;
    error: string;
}