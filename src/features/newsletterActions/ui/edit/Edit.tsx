import { FC } from "react";
import { Sign } from "../../../../shared/ui/sign";
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { newslettersService, useNewsletterActions } from "../../../../entities/newsletters";
import classes from '../newsletterActions.module.scss'
import editImg from '../../../../shared/lib/assets/edit.png'
import { useGlobalLoadingActions } from "../../../../entities/globalLoading";
import { useNavigate } from "react-router-dom";
import { NEWSLETTER_UPDATE_ROUTE } from "../../../../app/router/routes";

interface IProps {
    id: number;
}

export const Edit: FC<IProps> = ({id}) => {
    
    const {setGlobalMessage} = useGlobalMessageActions()
    const {setIsLoading} = useGlobalLoadingActions()
    const {setNewsletter} = useNewsletterActions()
    const router = useNavigate()

    const onEdit = async () => {
        try{
            setIsLoading(true)
            const newsletterRes = await newslettersService.get(id)
            setNewsletter(newsletterRes)
            router(NEWSLETTER_UPDATE_ROUTE.path)
        }
        catch(e){
            console.log(e)
            setGlobalMessage({message: 'Ошибка при получении данных рассылки', type: 'error'})
        }
        finally{
            setIsLoading(false)
        }
    }

    return (
        <section onClick={onEdit} className={classes.action}>
            <Sign sign="Редкатировать">
                <img src={editImg} />
            </Sign>
        </section>
    )
}