import { FC, PropsWithChildren } from "react";
import classes from './listActions.module.scss'
import { Delete } from "./delete/Delete";
import { IList } from "../../../entities/list";
import { Edit } from "./edit/Edit";


interface IProps{
    list: IList;
}

export const ListActions: FC<IProps & PropsWithChildren> = ({list, children}) => {


    return (
        <section className={classes.container}>
            <section className={classes.actionWrap}>
                <section className={classes.action}>
                    <Edit list={list} />
                </section>
                <section>
                    {children}
                </section>
            </section>
        </section>
    )
}