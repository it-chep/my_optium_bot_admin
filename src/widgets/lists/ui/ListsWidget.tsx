import { FC, useEffect, useState } from "react";
import { IList, ListItem, listService } from "../../../entities/list";
import { useGlobalMessageActions } from "../../../entities/globalMessage";
import { LoaderSpinner } from "../../../shared/ui/spinner";
import classes from './listsWidget.module.scss'



export const ListsWidget: FC = () => {

    const [lists, setLists] = useState<IList[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const {setGlobalMessage} = useGlobalMessageActions()

    const getData = async () => {
        try{
            setIsLoading(true)
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
                    {lists.map(list => 
                        <ListItem listItem={list} />
                    )}
                </ul>
            }
        </section>
    )
}