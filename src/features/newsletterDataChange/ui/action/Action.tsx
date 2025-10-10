import { FC } from "react";
import { useAppSelector } from "../../../../app/store/store";
import { useLocation, useNavigate } from "react-router-dom";
import { NEWSLETTER_CREATE_ROUTE, NEWSLETTERS_ROUTE } from "../../../../app/router/routes";
import { MyButton } from "../../../../shared/ui/button";
import { useGlobalLoadingActions } from "../../../../entities/globalLoading";
import { newslettersService } from "../../../../entities/newsletters";
import classes from './action.module.scss'
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { IFormError } from "../../../../shared/model/types";
import { INewsletterData } from "../../../../entities/newsletters/model/types";

interface IProps{
    formError: IFormError<INewsletterData>[];
    setFormError: (formError: IFormError<INewsletterData>[]) => void;
}

export const Action: FC<IProps> = ({formError, setFormError}) => {

    const {newsletterData} = useAppSelector(s => s.newsletterReducer)    

    const {setIsLoading} = useGlobalLoadingActions()
    const {setGlobalMessage} = useGlobalMessageActions()

    const {pathname} = useLocation()

    const isCreate = pathname === NEWSLETTER_CREATE_ROUTE.path;
    const router = useNavigate()

    const checkData = (): boolean => {
        const error: IFormError<INewsletterData>[] = [];
        let isOk = true;
        for(let key in newsletterData){
            if(key as keyof INewsletterData === 'content_type_id') continue
            if(newsletterData[key as keyof INewsletterData] === '' || 
                newsletterData[key as keyof INewsletterData] === -1 || 
                ((key as keyof INewsletterData === 'users_lists') && newsletterData['users_lists'].length === 0) 
            ){
                error.push({field: key as keyof INewsletterData, text: 'Обязательное поле'})
                isOk = false;
            }
        }
        setFormError(error)
        return isOk
    }

    const setData = async () => {
        if(!checkData()){
            return
        }
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
                <MyButton 
                    error={formError.length > 0 ? "Заполните обязательные поля" : ""}    
                >
                    {isCreate ? 'Создать' : 'Обновить'}
                </MyButton>
            </section>
        </section>
    )
}