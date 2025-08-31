import { FC } from "react";
import classes from './navHome.module.scss'
import { Section } from "../section/Section";
import { NEWSLETTERS_ROUTE, USER_LIST_ROUTE, USERS_ROUTE } from "../../../../app/router/routes";
import { sections } from "../../lib/const/sections";

export const NavHome: FC = () => {



    return (
        <nav className={classes.nav}>
            {sections.map(section => 
                <Section 
                    key={section.title}
                    title={section.title}
                    sections={section.sections}
                />
            )}
        </nav>
    )
}