


export interface INewsletter {
    id: number;
    name: string;
    status_id: 1 | 2 | 3;
    status_name: string;
    users_count: number;
}
export interface INewsletterData {
    id?: number;
    name: string;
    text: string;
    users_lists: number[];
    media_id: string;
    content_type_id: number;
}

export interface INewsletterDataInitialState {
    newsletterData: INewsletterData;
    isLoading: boolean;
    error: string;
}