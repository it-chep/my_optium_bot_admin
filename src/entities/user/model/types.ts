



export interface IUser {
    id: number;
    name: string;
    sex: "М" | "Ж";
    tg_id: number;
    metrics_link: string;
    birthday: string;
}

export interface IUserData {
    user: IUser;
    lists: {
        id: number;
        name: string;
    }[];
    posts: {
        id: number;
        name: string;
        is_required_theme: boolean;
    }[]
    scenarios: {
        id: number;
        name: string;
        scheduled_time: string;
    }[]
}