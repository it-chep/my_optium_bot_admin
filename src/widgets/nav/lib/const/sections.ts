import { NEWSLETTERS_ROUTE, USER_LIST_ROUTE, USERS_ROUTE } from "../../../../app/router/routes";
import { ISection } from "../../model/types";




export const sections: ISection[] = [
    {
        title: 'Общие разделы',
        sections: [
            {
                title: USERS_ROUTE.name,
                link: USERS_ROUTE.path
            }
        ]
    },
    {
        title: 'Рассылки',
        sections: [
            {
                title: NEWSLETTERS_ROUTE.name,
                link: NEWSLETTERS_ROUTE.path
            },
            {
                title: USER_LIST_ROUTE.name,
                link: USER_LIST_ROUTE.path
            }
        ]
    }
]