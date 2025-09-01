import { FC } from "react";
import { useAppSelector } from "../../../../app/store/store";
import { useLocation, useNavigate } from "react-router-dom";
import { NEWSLETTER_CREATE_ROUTE, NEWSLETTERS_ROUTE } from "../../../../app/router/routes";
import { MyButton } from "../../../../shared/ui/button";
import { useGlobalLoadingActions } from "../../../../entities/globalLoading";
import { newslettersService } from "../../../../entities/newsletters";
import classes from './action.module.scss'
import { useGlobalMessageActions } from "../../../../entities/globalMessage";



export const Action: FC = () => {

    const {newsletterData} = useAppSelector(s => s.newsletterReducer)    

    const {setIsLoading} = useGlobalLoadingActions()
    const {setGlobalMessage} = useGlobalMessageActions()

    const {pathname} = useLocation()

    const isCreate = pathname === NEWSLETTER_CREATE_ROUTE.path;
    const router = useNavigate()

    const setData = async () => {
        try{
            setIsLoading(true)
            if(isCreate){
                await newslettersService.create(newsletterData)
            }
            else{
                await newslettersService.update(newsletterData)
            }
            setGlobalMessage({message: 'Рассылка успешно ' + (isCreate ? 'создана' : 'обновлена'), type: 'ok'})
            router(NEWSLETTERS_ROUTE.path)
        }
        catch(e){
            console.log(e)
            setGlobalMessage({message: 'Ошбика при отправке данных о расслыке', type: 'error'})
        }
        finally{
            setIsLoading(false)
        }
    }

    return (
        <section className={classes.container} onClick={setData}>
            <section className={classes.button}>
                <MyButton>{isCreate ? 'Создать' : 'Обновить'}</MyButton>
            </section>
        </section>
    )
}