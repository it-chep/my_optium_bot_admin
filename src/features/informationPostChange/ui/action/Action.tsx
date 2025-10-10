import { FC } from "react";
import { useAppSelector } from "../../../../app/store/store";
import { INFORMATION_POSTS_ROUTE } from "../../../../app/router/routes";
import { MyButton } from "../../../../shared/ui/button";
import { useGlobalLoadingActions } from "../../../../entities/globalLoading";
import classes from './action.module.scss'
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { informationPostService } from "../../../../entities/informationPost";
import { useNavigate } from "react-router-dom";
import { AuthError } from "../../../../shared/lib/helpers/AuthError";
import { useMyActions } from "../../../../entities/my";
import { IInformationPostData } from "../../../../entities/informationPost/model/types";
import { IFormError } from "../../../../shared/model/types";

interface IProps {
    isCreate: boolean;
    formError: IFormError<IInformationPostData>[];
    setFormError: (formError: IFormError<IInformationPostData>[]) => void;
}

export const Action: FC<IProps> = ({isCreate, formError, setFormError}) => {

    const {informationPost} = useAppSelector(s => s.informationPostReducer)    

    const {setIsLoading} = useGlobalLoadingActions()
    const {setGlobalMessage} = useGlobalMessageActions()
    const {setIsAuth} = useMyActions()

    const router = useNavigate()

    const checkData = (): boolean => {
        const error: IFormError<IInformationPostData>[] = [];
        let isOk = true;
        for(let key in informationPost){
            if(key as keyof IInformationPostData === 'content_type_id') continue
            if(informationPost[key as keyof IInformationPostData] === '' || (informationPost[key as keyof IInformationPostData] === -1)){
                error.push({field: key as keyof IInformationPostData, text: 'Обязательное поле'})
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
                <MyButton 
                    error={formError.length > 0 ? "Заполните обязательные поля" : ""}    
                >
                    {isCreate ? 'Создать' : 'Обновить'}
                </MyButton>
            </section>
        </section>
    )
}