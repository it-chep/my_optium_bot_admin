import { FC, PropsWithChildren } from "react";
import { IList } from "../../../list/model/types";
import classes from './cardBadge.module.scss'
import required_theme_img from '../../../../shared/lib/assets/required_theme.png'

interface IProps{
    name: string;
    is_required_theme?: boolean;
}

export const CardBadge: FC<IProps & PropsWithChildren> = ({name, is_required_theme, children}) => {


    return (
        <section className={classes.badge}>
            {is_required_theme && <img src={required_theme_img} className={classes.required} />}
            <section className={classes.name}>{name}</section>
            <section className={classes.feature}>
                {children}
            </section>
        </section>
    )
}