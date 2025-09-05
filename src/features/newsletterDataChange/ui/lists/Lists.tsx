import { FC, useEffect, useState } from "react";
import classes from './lists.module.scss'
import { useGlobalLoadingActions } from "../../../../entities/globalLoading";
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { listService } from "../../../../entities/list";
import { useAppSelector } from "../../../../app/store/store";
import { newslettersService, useNewsletterActions } from "../../../../entities/newsletters";
import arrow from '../../../../shared/lib/assets/arrowDown.png'
import { IItem } from "../../../../shared/model/types";
import { DropDownListSelected } from "../../../../shared/ui/dropDownSelected";

interface IProps {
    type: 'lists' | 'fileType'
}

export const Lists: FC<IProps> = ({type}) => {

    const [open, setOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    
    const {newsletterData} = useAppSelector(s => s.newsletterReducer)
    const {setUsersLists, setСontentTypeId} = useNewsletterActions()

    const {setIsLoading: setGlobalIsLoading} = useGlobalLoadingActions()
    const {setGlobalMessage} = useGlobalMessageActions()
    
    const [items, setItems] = useState<IItem[]>([])
    
    const getData = async () => {
        try {
            setIsLoading(true)
            // await new Promise(resolve => setTimeout(resolve, 5000))
            if(type === 'lists'){
                const itemsRes = await listService.getAll()
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
        const target = type === "lists" ? [...newsletterData.users_lists] : []
        if(selected){
            target.push(item.id)
        }
        else{
            const targetInd = target.findIndex(id => id === item.id)
            if(targetInd >= 0){
                target.splice(targetInd, 1)
            }
        }
        if(type === 'lists'){
            setUsersLists(target)
        }
        else{
            setСontentTypeId(target[0])
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
                getList={getData}
                isLoading={isLoading}
                items={items}
                selectedIdItems={type === "lists" ? newsletterData.users_lists : [newsletterData.content_type_id]}                
            />
        </section>
    )
}