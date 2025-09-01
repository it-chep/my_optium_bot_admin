import { FC, PropsWithChildren } from "react";
import classes from './sign.module.scss'

interface IProps {
    sign: string;
}

export const Sign: FC<IProps & PropsWithChildren> = ({sign, children}) => {
    
    return (
        <section className={classes.container}>
            <section className={classes.text}>
                {children}
            </section>
            <section className={classes.sign}>
                {sign}
            </section>
        </section>
    )
}