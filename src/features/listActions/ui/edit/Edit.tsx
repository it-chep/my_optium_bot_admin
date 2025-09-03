import { FC, PropsWithChildren } from "react";
import { Sign } from "../../../../shared/ui/sign";
import { newslettersService, useNewsletterActions } from "../../../../entities/newsletters";
import classes from '../listActions.module.scss'
import editImg from '../../../../shared/lib/assets/edit.png'
import { IList, useListActions } from "../../../../entities/list";
import { useNavigate } from "react-router-dom";
import { LIST_UPDATE_ROUTE } from "../../../../app/router/routes";

interface IProps {
    list: IList;
}

export const Edit: FC<IProps> = ({list}) => {

    const router = useNavigate()

    const {setList} = useListActions()

    const onEdit = () => {
        setList(list)
        router(LIST_UPDATE_ROUTE.path)
    }

    return (
        <section onClick={onEdit} className={classes.action}>
            <Sign sign="Редкатировать">
                <img src={editImg} />
            </Sign>
        </section>
    )
}