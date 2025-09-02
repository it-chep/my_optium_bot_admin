import { FC, useState } from "react";
import { MyInput } from "../../../shared/ui/input";
import { listService, useListActions } from "../../../entities/list";
import { MyButton } from "../../../shared/ui/button";
import classes from './listChange.module.scss'
import { useGlobalMessageActions } from "../../../entities/globalMessage";
import { LoaderSpinner } from "../../../shared/ui/spinner";
import { useAppSelector } from "../../../app/store/store";

interface IProps {
    isCreate: boolean;
}

export const ListChange: FC<IProps> = ({isCreate}) => {

    const {setGlobalMessage} = useGlobalMessageActions()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {list} = useAppSelector(s => s.listReducer)
    const {setName} = useListActions()

    const onSend = async () => {
        try{
            setIsLoading(true)
            if(isCreate){
                await listService.create(list.name)
            }
            else{
                
            }
        }
        catch(e){
            console.log(e)
            setGlobalMessage({message: `Ошибка при ${isCreate? 'создании' : 'изменении'} списка`, type: 'error'})
        }
        finally{
            setIsLoading(false)
        }
    }

    return (
        <section className={classes.container}>
            {
                isLoading
                    ?
                <section className={classes.loader}><LoaderSpinner /></section>
                    :
                <>
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
                </>
            }
        </section>
    )
}