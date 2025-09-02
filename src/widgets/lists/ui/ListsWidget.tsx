import { FC, useEffect, useState } from "react";
import { IList, ListItem, listService } from "../../../entities/list";
import { useGlobalMessageActions } from "../../../entities/globalMessage";
import { LoaderSpinner } from "../../../shared/ui/spinner";
import classes from './listsWidget.module.scss'
import { ListActions } from "../../../features/listActions";
import { MyButton } from "../../../shared/ui/button";
import { useNavigate } from "react-router-dom";
import { LIST_CREATE_ROUTE } from "../../../app/router/routes";



export const ListsWidget: FC = () => {

    const router = useNavigate()

    const [lists, setLists] = useState<IList[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const {setGlobalMessage} = useGlobalMessageActions()

    const [open, setOpen] = useState<boolean>(false)
    const [selectedId, setSelectedId] = useState<number>(-1)

    const [isSend, setIsSend] = useState<boolean>(false)


    const getData = async () => {
        try{
            setIsLoading(true)
            await new Promise(resolve => setTimeout(resolve, 1000))
            const listsRes = await listService.getAll()
            setLists(listsRes)
        }
        catch(e){
            console.log(e)
            setGlobalMessage({message: 'Ошибка при получении списка рассылок', type: 'error'})
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
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
                            <ListActions setSelectedId={setSelectedId} list={list} />
                        </ListItem>
                    )}
                </ul>
            }
        </section>
    )
}