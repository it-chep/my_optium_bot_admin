import { FC } from "react";
import classes from './globalMessage.module.scss'
import { useAppSelector } from "../../../app/store/store";

export const GlobalMessage: FC = () => {

    const {message, type} = useAppSelector(s => s.globalMessageReducer)

    return (
        <section className={classes.container + (type === 'ok' ? ` ${classes.ok}` : ` ${classes.error}`)}>
            {message}
        </section>
    )
}