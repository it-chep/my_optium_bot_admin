import { FC, useState } from "react";
import classes from './addUserData.module.scss'
import { MyButton } from "../../../../shared/ui/button";
import { useGlobalLoadingActions } from "../../../../entities/globalLoading";
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { userService } from "../../../../entities/user";
import { listService } from "../../../../entities/list";
import { IPost, postService } from "../../../../entities/post";
import { DropDownList } from "../../../../shared/ui/dropDown";
import { IItem } from "../../../../shared/model/types";
import { AuthError } from "../../../../shared/lib/helpers/AuthError";
import { useMyActions } from "../../../../entities/my";

interface IProps {
    userItems: IItem[];
    type: 'posts' | 'lists';
    setLists: (item: IItem, selected: boolean) => void;
    userId: number;
    setPosts?: (post: IPost[]) => void;
}

export const AddUserData: FC<IProps> = ({userItems, type, setLists, userId, setPosts}) => {

    const [open, setOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {setIsAuth} = useMyActions()
    const {setIsLoading: setGlobalIsLoading} = useGlobalLoadingActions()
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
                setPosts && setPosts(itemsRes)
                setItems(itemsRes)
            }
        }
        catch(e){
            console.log(e)
            if(e instanceof AuthError){
                setIsAuth(false)
                setGlobalMessage({message: e.message, type: 'error'})
            }
            else{
                setGlobalMessage({message: 'Ошибка при получении данных', type: 'error'})
            }
        }
        finally{
            setIsLoading(false)
        }
    }

    const onSelected = (item: IItem) => {
        return async (selected: boolean) => {
            try{
                setGlobalIsLoading(true)
                if(type === 'lists'){
                    await userService.setList(userId, item.id)
                }
                else{
                    await userService.setPost(userId, item.id)
                }
                setLists(item, selected)
            }
            catch(e){
                console.log(e)
                if(e instanceof AuthError){
                    setIsAuth(false)
                    setGlobalMessage({message: e.message, type: 'error'})
                }
                else{
                    setGlobalMessage({message: 'Ошбика при добавлении данных', type: 'error'})
                }
            }
            finally{
                setGlobalIsLoading(false)
            }
        }
    }

    return (
        <section className={classes.wrapper}>
            <section className={classes.button}>   
                <MyButton onClick={() => setOpen(!open)}>{open ? '-' : '+'}</MyButton>
            </section>
            {
                open 
                    && 
                <DropDownList 
                    items={items} 
                    getList={getData} 
                    onSelected={onSelected} 
                    selectedIdItems={userItems.map(item => item.id)} 
                    isLoading={isLoading}
                />
            }
        </section>
    )
}