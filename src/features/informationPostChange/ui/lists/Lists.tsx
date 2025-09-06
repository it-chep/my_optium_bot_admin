import { FC, useEffect, useState } from "react";
import classes from './lists.module.scss'
import { DropDownList } from "../../../../shared/ui/dropDown";
import { useGlobalLoadingActions } from "../../../../entities/globalLoading";
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { useAppSelector } from "../../../../app/store/store";
import { newslettersService, useNewsletterActions } from "../../../../entities/newsletters";
import arrow from '../../../../shared/lib/assets/arrowDown.png'
import { IItem } from "../../../../shared/model/types";
import { useInformationPostActions } from "../../../../entities/informationPost";
import { postService } from "../../../../entities/post";
import { DropDownListSelected } from "../../../../shared/ui/dropDownSelected";

interface IProps {
    type: 'posts' | 'fileType'
}


export const Lists: FC<IProps> = ({type}) => {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    
    const {informationPost} = useAppSelector(s => s.informationPostReducer)
    const {setThemeId, setContentTypeId} = useInformationPostActions()

    const {setIsLoading: setGlobalIsLoading} = useGlobalLoadingActions()
    const {setGlobalMessage} = useGlobalMessageActions()
    
    const [items, setItems] = useState<IItem[]>([])
    
    const getData = async () => {
        try {
            setIsLoading(true)
            if(type === 'posts'){
                const itemsRes = await postService.getAll()
                setItems(itemsRes)   
            }
            else{
                const itemsRes = await newslettersService.getContentTypes()
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

    const setItem = (item: {id: number, name: string}, selected: boolean) => { 
        if(type === 'posts'){
            setThemeId(selected ? item.id : -1)
        }
        else{
            setContentTypeId(selected ? item.id : -1)
        }
    }
    
    const onSelected = (item: IItem) => {
        return (selected: boolean) => {
            try{
                setGlobalIsLoading(true)
                setItem(item, selected)
            }
            catch(e){
                console.log(e)
                setGlobalMessage({message: 'Ошбика при добавлении данных', type: 'error'})
            }
            finally{
                setGlobalIsLoading(false)
            }
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <section className={classes.container}>
            <DropDownListSelected 
                onSelected={onSelected}
                isLoading={isLoading}
                items={items}
                selectedIdItems={type === "posts" ? [informationPost.theme_id] : [informationPost.content_type_id]}
            />
        </section>
    )
}