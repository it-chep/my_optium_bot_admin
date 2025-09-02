import { FC, useState } from "react";
import classes from './lists.module.scss'
import { DropDownList } from "../../../../shared/ui/dropDown";
import { useGlobalLoadingActions } from "../../../../entities/globalLoading";
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import arrow from '../../../../shared/lib/assets/arrowDown.png'
import { IItem } from "../../../../shared/model/types";
import { adminMessageService } from "../../../../entities/adminMessage";
import { IAdminMessageData } from "../../../../entities/adminMessage/model/types";

interface IProps {
    type: 'scenarios' | 'typeMessage';
    adminMessage: IAdminMessageData;
    setAdminMessage: (adminMessage: IAdminMessageData) => void;
}


export const Lists: FC<IProps> = ({type, adminMessage, setAdminMessage}) => {

    const [open, setOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(type === 'scenarios')
    
    const {setIsLoading: setGlobalIsLoading} = useGlobalLoadingActions()
    const {setGlobalMessage} = useGlobalMessageActions()
    
    const [items, setItems] = useState<IItem[]>([])
    
    const getData = async () => {
        try {
            setIsLoading(true)
            const itemsRes = await adminMessageService.getScenarios()
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
            setAdminMessage({...adminMessage, scenario_id: item.id})
        }
        else{
            setAdminMessage({...adminMessage, type: item.id})
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

    return (
        <section className={classes.container}>
            <section 
                onMouseDown={e => e.preventDefault()}
                onClick={() => setOpen(!open)} 
                className={classes.button}
            >
                {
                    type === "scenarios" 
                        ? 
                    items.find(item => item.id === adminMessage.scenario_id)?.name || (adminMessage.scenario_id < 0 && 'не выбрано')
                        :
                    items.find(item => item.id === adminMessage.type)?.name || (adminMessage.type < 0 && 'не выбрано')
                }
                <img alt="Открыть" src={arrow} />
            </section>
            {
                open
                    &&
                <DropDownList 
                    onSelected={onSelected}
                    getList={type === 'scenarios' ? getData : getDataType}
                    isLoading={isLoading}
                    items={items}
                    selectedIdItems={type === "scenarios" ? [adminMessage.scenario_id] : [adminMessage.type]}
                />
            }
        </section>
    )
}