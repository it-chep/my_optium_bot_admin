import { FC, useEffect, useState } from "react";
import classes from './lists.module.scss'
import { DropDownList } from "../../../../shared/ui/dropDown";
import { useGlobalLoadingActions } from "../../../../entities/globalLoading";
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import arrow from '../../../../shared/lib/assets/arrowDown.png'
import { IItem } from "../../../../shared/model/types";
import { IAdminMessageData } from "../../../../entities/adminMessage/model/types";
import { scenarioService } from "../../../../entities/scenario";
import { DropDownListSelected } from "../../../../shared/ui/dropDownSelected";

interface IProps {
    type: 'scenarios' | 'typeMessage';
    adminMessage: IAdminMessageData;
    setAdminMessage: (adminMessage: IAdminMessageData) => void;
}


export const Lists: FC<IProps> = ({type, adminMessage, setAdminMessage}) => {

    const [isLoading, setIsLoading] = useState<boolean>(type === 'scenarios')
    
    const {setIsLoading: setGlobalIsLoading} = useGlobalLoadingActions()
    const {setGlobalMessage} = useGlobalMessageActions()
    
    const [items, setItems] = useState<IItem[]>([])
    
    const getData = async () => {
        try {
            setIsLoading(true)
            const itemsRes = await scenarioService.getScenarios()
            setItems(itemsRes)   
        }
        catch(e){
            console.log(e)
            setGlobalMessage({message: 'Ошибка при получении списка сценарий', type: 'error'})
        }
        finally{
            setIsLoading(false)
        }
    }

    const getDataType = () => {
        setItems([
            {
                id: 1,
                name: 'Доктору'
            },
            {
                id: 2,
                name: 'Админу'
            }
        ])
    }

    const setItem = (item: {id: number, name: string}, selected: boolean) => { 
        if(type === 'scenarios'){
            setAdminMessage({...adminMessage, scenario_id: selected ? item.id : -1, step_order: -1})
        }
        else{
            setAdminMessage({...adminMessage, type: selected ? item.id : -1})
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
        (type === 'scenarios' ? getData : getDataType)()
    }, [])

    return (
        <section className={classes.container}>
            <DropDownListSelected 
                onSelected={onSelected}
                isLoading={isLoading}
                items={items}
                selectedIdItems={type === "scenarios" ? [adminMessage.scenario_id] : [adminMessage.type]}
            />
        </section>
    )
}