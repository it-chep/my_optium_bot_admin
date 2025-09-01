import { LISTS_ROUTE, NEWSLETTERS_ROUTE, USERS_ROUTE } from "../../../../app/router/routes";
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
                title: LISTS_ROUTE.name,
                link: LISTS_ROUTE.path
            }
        ]
    }
]