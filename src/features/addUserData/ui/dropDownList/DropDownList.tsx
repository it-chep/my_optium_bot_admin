import { FC, useEffect, useState } from "react";
import classes from './dropDownList.module.scss'
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { IItem } from "../../model/types";
import { listService } from "../../../../entities/list";
import { LoaderSpinner } from "../../../../shared/ui/spinner";
import { List } from "../list/List";
import { postService } from "../../../../entities/post";

interface IProps {
    userItems: IItem[];
    type: 'lists' | 'posts';
    setLists: (item: IItem, selected: boolean) => void;
    userId: number;
}

export const DropDownList: FC<IProps> = ({userItems, type, setLists, userId}) => {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {setGlobalMessage} = useGlobalMessageActions()
    const [items, setItems] = useState<IItem[]>([])

    const getData = async () => {
        try {
            setIsLoading(true)
            if(type === 'lists'){
                const itemsRes = await listService.getAll()
                setItems(itemsRes)
            }
            else{
                const itemsRes = await postService.getAll()
                setItems(itemsRes)
            }
        }
        catch(e){
            console.log(e)
            setGlobalMessage({message: 'Ошибка при получении данных', type: 'error'})
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
                <section>
                    <List 
                        userId={userId} 
                        type={type} 
                        setLists={setLists} 
                        items={items} 
                        userItems={userItems} 
                    />
                </section>
            }
        </section>
    )
}