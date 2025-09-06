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

interface IProps{
    adminMessage: IAdminMessageData;
}

export const Action: FC<IProps> = ({adminMessage}) => {

    const {setIsLoading} = useGlobalLoadingActions()
    const {setGlobalMessage} = useGlobalMessageActions()
    const router = useNavigate()
    const {setIsAuth} = useMyActions()

    const setData = async () => {
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
                <MyButton>Создать</MyButton>
            </section>
        </section>
    )
}