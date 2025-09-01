import { FC } from "react";
import classes from './newsletterActions.module.scss'
import { INewsletter } from "../../../entities/newsletters";
import { Delete } from "./delete/Delete";
import { Send } from "./send/Send";
import { SendTest } from "./sendTest/SendTest";
import { Edit } from "./edit/Edit";

interface IProps {
    newsletter: INewsletter;
    onChangeStatusId: () => void;
}

export const NewsletterActions: FC<IProps> = ({newsletter, onChangeStatusId}) => {


    return (
        <section className={classes.container}>
            <section className={classes.actionWrap}>
                <section>
                    <SendTest id={newsletter.id} />
                </section>
                <section>
                    <Send onChangeStatusId={onChangeStatusId} id={newsletter.id} />
                </section>
                <section className={classes.action}>
                    <Edit id={newsletter.id} />
                </section>
                <section>
                    <Delete id={newsletter.id} />
                </section>
            </section>
        </section>
    )
}