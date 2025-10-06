import { FC } from "react";
import { ADMIN_MESSAGES_ROUTE,  } from "../../../../app/router/routes";
import { MyButton } from "../../../../shared/ui/button";
import { useGlobalLoadingActions } from "../../../../entities/globalLoading";
import classes from './action.module.scss'
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { useNavigate } from "react-router-dom";
import { IAdminMessageData } from "../../../../entities/adminMessage/model/types";
import { adminMessageService } from "../../../../entities/adminMessage";
import { AuthError } from "../../../../shared/lib/helpers/AuthError";
import { useMyActions } from "../../../../entities/my";
import { IFormError } from "../../../../shared/model/types";

interface IProps{
    adminMessage: IAdminMessageData;
    formError: IFormError<IAdminMessageData>[];
    setFormError: (formError: IFormError<IAdminMessageData>[]) => void;
}

export const Action: FC<IProps> = ({adminMessage, formError, setFormError}) => {

    const {setIsLoading} = useGlobalLoadingActions()
    const {setGlobalMessage} = useGlobalMessageActions()
    const router = useNavigate()
    const {setIsAuth} = useMyActions()

    const checkData = (): boolean => {
        const error: IFormError<IAdminMessageData>[] = [];
        let isOk = true;
        for(let key in adminMessage){
            if(adminMessage[key as keyof IAdminMessageData] === '' || adminMessage[key as keyof IAdminMessageData] === -1){
                error.push({field: key as keyof IAdminMessageData, text: 'Обязательное поле'})
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
            await adminMessageService.create(adminMessage)
            setGlobalMessage({message: 'Админское сообщение создано', type: 'ok'})
            router(ADMIN_MESSAGES_ROUTE.path)
        }
        catch(e){
            console.log(e)
            if(e instanceof AuthError){
                setIsAuth(false)
                setGlobalMessage({message: e.message, type: 'error'})
            }
            else{
                setGlobalMessage({message: 'Ошбика при создании админского сообщения', type: 'error'})
            }
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
                    Создать
                </MyButton>
            </section>
        </section>
    )
}