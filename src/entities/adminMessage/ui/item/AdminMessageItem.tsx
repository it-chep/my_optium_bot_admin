import { FC, PropsWithChildren } from "react";
import classes from './adminMessageItem.module.scss'
import { Sign } from "../../../../shared/ui/sign";
import { IAdminMessage } from "../../model/types";


interface IProps{
    adminMessage: IAdminMessage;
}

export const AdminMessageItem: FC<IProps & PropsWithChildren> = ({adminMessage, children}) => {


    return (
        <li className={classes.item}>
            <section className={classes.data}>
                <section className={classes.sign}>
                    <Sign sign="Название сценария">
                        {adminMessage.scenario_name}
                    </Sign>
                </section>
                <section className={classes.sign}>
                    <Sign sign="Номер шага">
                        {adminMessage.step_order}
                    </Sign>
                </section>
                <section className={classes.sign}>
                    <Sign sign="Тип сообщения">
                        {adminMessage.type_name}
                    </Sign>
                </section>
                <section className={classes.sign}>
                    <Sign sign="Текст сообщения">
                        {adminMessage.text.slice(0, 40)}...
                    </Sign>
                </section>
            </section>
            <section className={classes.features}>
                {children}
            </section>
        </li>
    )
}