import { FC, PropsWithChildren } from "react";
import classes from './cardItem.module.scss'

interface IProps {
    sign: string;
}

export const CardItem: FC<IProps & PropsWithChildren> = ({sign, children}) => {

    return (
        <li className={classes.card}>
            <section className={classes.sign}>{sign}</section>
            {children}
        </li>
    )
}