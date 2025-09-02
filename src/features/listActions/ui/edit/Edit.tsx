import { FC, PropsWithChildren } from "react";
import { Sign } from "../../../../shared/ui/sign";
import { newslettersService, useNewsletterActions } from "../../../../entities/newsletters";
import classes from '../listActions.module.scss'
import editImg from '../../../../shared/lib/assets/edit.png'

interface IProps {
    setSelectedId: (selectedId: number) => void;
    id: number;
}

export const Edit: FC<IProps> = ({setSelectedId, id}) => {



    return (
        <section onClick={() => setSelectedId(id)} className={classes.action}>
            <Sign sign="Редкатировать">
                <img src={editImg} />
            </Sign>
        </section>
    )
}