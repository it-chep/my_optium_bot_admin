import { FC } from "react";
import classes from './navHome.module.scss'
import { Section } from "../section/Section";
import { NEWSLETTERS_ROUTE, USER_LIST_ROUTE, USERS_ROUTE } from "../../../../app/router/routes";

export const NavHome: FC = () => {



    return (
        <nav className={classes.nav}>
            <Section 
                title="Общие разделы"  
                sections={[
                    {
                        title: USERS_ROUTE.name,
                        link: USERS_ROUTE.path
                    }
                ]}
            />
            <Section 
                title="Рассылки"
                sections={[
                    {
                        title: NEWSLETTERS_ROUTE.name,
                        link: NEWSLETTERS_ROUTE.path
                    },
                    {
                        title: USER_LIST_ROUTE.name,
                        link: USER_LIST_ROUTE.path
                    }
                ]}
            />
        </nav>
    )
}