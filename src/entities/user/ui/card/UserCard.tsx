import { FC, PropsWithChildren } from "react";
import { IUserData } from "../../model/types";
import classes from './card.module.scss'
import { CardItem } from "../cardItem/CardItem";

interface IProps {
    user: IUserData;
}

export const UserCard: FC<IProps & PropsWithChildren> = ({user, children}) => {

    return (
        <ul className={classes.list}>
            <CardItem sign="tg_ID">
                {user.user.tg_id}
            </CardItem>
             <CardItem sign="Пол">
                {user.user.sex}
            </CardItem> <CardItem sign="Ссылка на метрики">
                <a target="_blank" href={user.user.metrics_link}>ссылка</a>
            </CardItem> 
            <CardItem sign="Дата рождения">
                {user.user.birthday}
            </CardItem>
            <CardItem sign="">
                {children}
            </CardItem>
        </ul>
    )
}