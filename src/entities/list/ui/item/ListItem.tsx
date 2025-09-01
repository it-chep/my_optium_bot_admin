import { FC, PropsWithChildren } from "react";
import classes from './listItem.module.scss'
import { IList } from "../../model/types";
import { Sign } from "../../../../shared/ui/sign";
import people from '../../../../shared/lib/assets/people.png'


interface IProps{
    listItem: IList;
}

export const ListItem: FC<IProps & PropsWithChildren> = ({listItem, children}) => {


    return (
        <li className={classes.item}>
            <section className={classes.data}>
                <section className={classes.sign}>
                    <Sign sign="Количество пользователей">
                        <img src={people} />
                        {listItem.users_count}
                    </Sign>
                </section>
                <section className={classes.sign}>
                    <Sign sign="Название списка">
                        {listItem.name}
                    </Sign>
                </section>
            </section>
            <section className={classes.features}>
                {children}
            </section>
        </li>
    )
}