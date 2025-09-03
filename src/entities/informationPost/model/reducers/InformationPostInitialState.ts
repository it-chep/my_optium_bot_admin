import { IInformationPostDataInitialState } from "../types";



export const InformationPostInitialState: IInformationPostDataInitialState = {
    informationPost: {
        post_name: '',
        theme_id: -1,
        order: 1,
        message: '',
        media_id: '',
        content_type_id: -1,
    },
    isLoading: false,
    error: ''
}