import { FC, PropsWithChildren } from "react";
import classes from './listActions.module.scss'
import { Delete } from "./delete/Delete";
import { IList } from "../../../entities/list";
import { Edit } from "./edit/Edit";


interface IProps{
    list: IList;
    setSelectedId: (selectedId: number) => void;
}

export const ListActions: FC<IProps> = ({list, setSelectedId}) => {


    return (
        <section className={classes.container}>
            <section className={classes.actionWrap}>
                <section className={classes.action}>
                    <Edit setSelectedId={setSelectedId} id={list.id}/>
                </section>
                <section>
                    <Delete id={list.id} />
                </section>
            </section>
        </section>
    )
}