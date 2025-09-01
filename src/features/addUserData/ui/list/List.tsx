import { FC, useState } from "react";
import classes from './list.module.scss'
import { MyCheckbox } from "../../../../shared/ui/myCheckbox";
import { IItem } from "../../model/types";
import { userService } from "../../../../entities/user";
import { useGlobalLoadingActions } from "../../../../entities/globalLoading";
import { useGlobalMessageActions } from "../../../../entities/globalMessage";

interface IProps {
    userItems: IItem[];
    items: IItem[];
    setLists: (item: IItem, selected: boolean) => void;
    type: 'lists' | 'posts';
    userId: number;
}

export const List: FC<IProps> = ({items, userItems, setLists, type, userId}) => {
 
    const {setIsLoading} = useGlobalLoadingActions()
    const {setGlobalMessage} = useGlobalMessageActions()

    const onSelected = (item: IItem) => {
        return async (selected: boolean) => {
            try{
                setIsLoading(true)
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
                setGlobalMessage({message: 'Ошбика при добавлении данных', type: 'error'})
            }
            finally{
                setIsLoading(false)
            }
        }
    }

    return (
        <ul className={classes.list}>
            {items.map(item => 
                <li key={item.name}>
                    <MyCheckbox 
                        onSelected={onSelected(item)} 
                        checked={Boolean(~userItems.findIndex(userItem => userItem.name === item.name))} 
                        label={item.name}
                    />
                </li>
            )}
        </ul>
    )
}