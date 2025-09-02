import { FC, PropsWithChildren } from "react";
import classes from './newsletterActions.module.scss'
import { INewsletter } from "../../../entities/newsletters";
import { Send } from "./send/Send";
import { SendTest } from "./sendTest/SendTest";
import { Edit } from "./edit/Edit";

interface IProps {
    newsletter: INewsletter;
    onChangeStatusId: () => void;
}

export const NewsletterActions: FC<IProps & PropsWithChildren> = ({newsletter, onChangeStatusId, children}) => {


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
                    {children}
                </section>
            </section>
        </section>
    )
}