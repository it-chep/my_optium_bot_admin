import { INewsletterDataInitialState } from "../types";


export const NewsletterDataInitialState: INewsletterDataInitialState = {
    newsletterData: {
        name: '',
        text: '',
        content_type_id: -1,
        media_id: '',
        users_lists: [],
    },
    error: '',
    isLoading: true
} 