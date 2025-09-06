import { FC } from "react";
import { MyInput } from "../../../shared/ui/input";
import { listService, useListActions } from "../../../entities/list";
import { MyButton } from "../../../shared/ui/button";
import classes from './listChange.module.scss'
import { useGlobalMessageActions } from "../../../entities/globalMessage";
import { useAppSelector } from "../../../app/store/store";
import { useGlobalLoadingActions } from "../../../entities/globalLoading";
import { useNavigate } from "react-router-dom";
import { LISTS_ROUTE } from "../../../app/router/routes";
import { AuthError } from "../../../shared/lib/helpers/AuthError";
import { useMyActions } from "../../../entities/my";

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

    const onSend = async () => {
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
            />
            <section className={classes.button}>
                <MyButton onClick={onSend}>
                    {isCreate ? 'Создать' : 'Обновить'}
                </MyButton>
            </section>   
        </section>
    )
}