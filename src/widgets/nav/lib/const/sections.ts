import { ADMIN_MESSAGES_ROUTE, INFORMATION_POSTS_ROUTE, LISTS_ROUTE, NEWSLETTERS_ROUTE, POSTS_THEMES_ROUTE, SCENARIO_MESSAGES_ROUTE, SCENARIO_ROUTE, USERS_ROUTE } from "../../../../app/router/routes";
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
    },
    {
        title: 'Информация',
        sections: [
            {
                title: INFORMATION_POSTS_ROUTE.name,
                link: INFORMATION_POSTS_ROUTE.path
            },
            {
                title: POSTS_THEMES_ROUTE.name,
                link: POSTS_THEMES_ROUTE.path
            }
        ]
    },
    {
        title: 'Настройки сценариев',
        sections: [
            {
                title: ADMIN_MESSAGES_ROUTE.name,
                link: ADMIN_MESSAGES_ROUTE.path
            },
            {
                title: SCENARIO_MESSAGES_ROUTE.name,
                link: SCENARIO_MESSAGES_ROUTE.path
            },
            {
                title: SCENARIO_ROUTE.name,
                link: SCENARIO_ROUTE.path
            }
        ]
    }
]