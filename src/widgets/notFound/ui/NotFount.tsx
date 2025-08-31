import { FC } from "react";
import classes from './notFound.module.scss'
import { MyButton } from "../../../shared/ui/button";
import { Link } from "react-router-dom";


export const NotFound: FC = () => {

    return (
        <section className={classes.notFound}>
            404

            <Link to={'/'}>
                <MyButton>Вернуться на главную</MyButton>
            </Link>
        </section>
    )
}