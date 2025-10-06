import { FC, useState } from "react";
import { MyInput } from "../../../shared/ui/input";
import { IList, listService, useListActions } from "../../../entities/list";
import { MyButton } from "../../../shared/ui/button";
import classes from './listChange.module.scss'
import { useGlobalMessageActions } from "../../../entities/globalMessage";
import { useAppSelector } from "../../../app/store/store";
import { useGlobalLoadingActions } from "../../../entities/globalLoading";
import { useNavigate } from "react-router-dom";
import { LISTS_ROUTE } from "../../../app/router/routes";
import { AuthError } from "../../../shared/lib/helpers/AuthError";
import { useMyActions } from "../../../entities/my";
import { changeFormError } from "../../../shared/lib/helpers/ChangeFormError";
import { IFormError } from "../../../shared/model/types";

interface IProps {
    isCreate: boolean;
}

export const ListChange: FC<IProps> = ({isCreate}) => {

    const {setGlobalMessage} = useGlobalMessageActions()

    const {setIsLoading} = useGlobalLoadingActions()

    const router = useNavigate()
    const {setIsAuth} = useMyActions()
    const {list} = useAppSelector(s => s.listReducer)
    const {setName} = useListActions()

    const [formError, setFormError] = useState<IFormError<IList>[]>([])
    const setErrorFieldDelete = changeFormError(formError, setFormError)

    const checkData = (): boolean => {
        const error: IFormError<IList>[] = [];
        let isOk = true;
        for(let key in list){
            if(list[key as keyof IList] === '' || list[key as keyof IList] === -1){
                error.push({field: key as keyof IList, text: 'Обязательное поле'})
                isOk = false;
            }
        }
        setFormError(error)
        return isOk
    }

    const onSend = async () => {
        if(!checkData()){
            return
        }
        try{
            setIsLoading(true)
            if(isCreate){
                await listService.create(list.name)
            }
            else{
                await listService.update(list.id, list.name)
            }
            router(LISTS_ROUTE.path)
        }
        catch(e){
            console.log(e)
            if(e instanceof AuthError){
                setIsAuth(false)
                setGlobalMessage({message: e.message, type: 'error'})
            }
            else{
                setGlobalMessage({message: `Ошибка при ${isCreate? 'создании' : 'изменении'} списка`, type: 'error'})
            }
        }
        finally{
            setIsLoading(false)
        }
    }

    return (
        <section className={classes.container}>
            <MyInput
                title="Название списка"
                value={list.name}
                setValue={setName}
                error={formError.find(error => error.field === "name")?.text}
                setError={setErrorFieldDelete('name')}
            />
            <section className={classes.button}>
                <MyButton 
                    error={formError.length > 0 ? "Заполните обязательные поля" : ""}        
                    onClick={onSend}
                >
                    {isCreate ? 'Создать' : 'Обновить'}
                </MyButton>
            </section>   
        </section>
    )
}