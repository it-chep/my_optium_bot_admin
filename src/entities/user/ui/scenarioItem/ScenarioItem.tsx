import { FC, PropsWithChildren } from "react";
import { IUserData } from "../../model/types";
import classes from './scenarioItem.module.scss'

interface IProps{
    scenario: IUserData['scenarios'][0]
}

export const ScenarioItem: FC<IProps & PropsWithChildren> = ({scenario, children}) => {

    return (
        <li className={classes.item}>
            <section className={classes.name}>{scenario.name}</section>
            <section className={classes.time}>
                <span>Следующий запуск: </span><span className={classes.data}>{scenario.scheduled_time}</span></section>
            <section>{children}</section>
        </li>
    )
}