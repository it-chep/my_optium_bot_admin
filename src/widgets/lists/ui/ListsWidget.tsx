import { FC, useEffect, useState } from "react";
import { IList, ListItem, listService, useListActions } from "../../../entities/list";
import { useGlobalMessageActions } from "../../../entities/globalMessage";
import { LoaderSpinner } from "../../../shared/ui/spinner";
import classes from './listsWidget.module.scss'
import { ListActions } from "../../../features/listActions";
import { MyButton } from "../../../shared/ui/button";
import { useNavigate } from "react-router-dom";
import { LIST_CREATE_ROUTE } from "../../../app/router/routes";
import { DeleteAction } from "../../../features/deleteAction";
import { AuthError } from "../../../shared/lib/helpers/AuthError";
import { useMyActions } from "../../../entities/my";



export const ListsWidget: FC = () => {

    const router = useNavigate()

    const [lists, setLists] = useState<IList[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const {setIsAuth} = useMyActions()
    const {setGlobalMessage} = useGlobalMessageActions()
    const {setInitialState} = useListActions()

    const onDelete = async (id: number) => {
        await listService.delete(id)
    }

    const getData = async () => {
        try{
            setIsLoading(true)
            const listsRes = await listService.getAll()
            setLists(listsRes)
        }
        catch(e){
            console.log(e)
            if(e instanceof AuthError){
                setIsAuth(false)
                setGlobalMessage({message: e.message, type: 'error'})
            }
            else{
                setGlobalMessage({message: 'Ошибка при получении списка рассылок', type: 'error'})
            }
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
        setInitialState()
    }, [])

    return (
        <section className={classes.container}>
            {
                isLoading
                    ?
                <section className={classes.loader}><LoaderSpinner /></section>
                    :
                <ul className={classes.list}>
                    <li className={classes.create}>
                        <section className={classes.button}>
                            <MyButton onClick={() => router(LIST_CREATE_ROUTE.path)}>Создать список</MyButton>
                        </section>
                    </li>
                    {lists.map(list => 
                        <ListItem key={list.id} listItem={list}>
                            <ListActions list={list}>
                                <DeleteAction 
                                    successText="Список рассылок успешно удален"
                                    errorText="Ошибка при удалении списка рассылок"
                                    questionText="Точно хотите удалить список ?"
                                    onDelete={() => onDelete(list.id)}
                                />
                            </ListActions>
                        </ListItem>
                    )}
                </ul>
            }
        </section>
    )
}