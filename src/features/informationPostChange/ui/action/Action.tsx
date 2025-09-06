import { FC } from "react";
import { useAppSelector } from "../../../../app/store/store";
import { INFORMATION_POSTS_ROUTE, NEWSLETTERS_ROUTE } from "../../../../app/router/routes";
import { MyButton } from "../../../../shared/ui/button";
import { useGlobalLoadingActions } from "../../../../entities/globalLoading";
import classes from './action.module.scss'
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { informationPostService } from "../../../../entities/informationPost";
import { useNavigate } from "react-router-dom";
import { AuthError } from "../../../../shared/lib/helpers/AuthError";
import { useMyActions } from "../../../../entities/my";

interface IProps {
    isCreate: boolean;
}

export const Action: FC<IProps> = ({isCreate}) => {

    const {informationPost} = useAppSelector(s => s.informationPostReducer)    

    const {setIsLoading} = useGlobalLoadingActions()
    const {setGlobalMessage} = useGlobalMessageActions()
    const {setIsAuth} = useMyActions()

    const router = useNavigate()

    const setData = async () => {
        try{
            setIsLoading(true)
            if(isCreate){
                await informationPostService.create(informationPost)
            }
            else{
                await informationPostService.update(informationPost)
            }
            setGlobalMessage({message: 'Информационный пост ' + (isCreate ? 'создан' : 'обновлен'), type: 'ok'})
            router(INFORMATION_POSTS_ROUTE.path)
        }
        catch(e){
            console.log(e)
            if(e instanceof AuthError){
                setIsAuth(false)
                setGlobalMessage({message: e.message, type: 'error'})
            }
            else{
                setGlobalMessage({message: 'Ошбика при отправке данных о информационном посте', type: 'error'})
            }
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