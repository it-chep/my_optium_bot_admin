import { FC, PropsWithChildren } from "react";
import classes from './newsletterItem.module.scss'
import { Sign } from "../../../../shared/ui/sign";
import people from '../../../../shared/lib/assets/people.png'

interface IProps {
    userCount: number;
    name: string;
    statusName: string;
    statusId: number;
}


export const NewsletterItem: FC<IProps & PropsWithChildren> = ({userCount, name, statusName, statusId, children}) => {


    return (
        <li className={classes.container}>
            <section className={classes.data}>
                <section className={classes.sign}>
                    <Sign sign="Количество пользователей">
                        <img src={people} />
                        {userCount}
                    </Sign>
                </section>
                <section className={classes.sign}>
                    <Sign sign="Название рассылки">
                        {name}
                    </Sign>
                </section>
                <section 
                    className={
                        classes.badge + (statusId === 1 ? ` ${classes.one}` : statusId === 2 ? ` ${classes.two}` : ` ${classes.free}`)
                    }
                >
                    {statusName}
                </section>
            </section>
            <section className={classes.features}>
                {children}
            </section>
        </li>
    )
}