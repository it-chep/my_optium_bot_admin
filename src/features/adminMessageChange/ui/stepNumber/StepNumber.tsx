import { FC, useEffect, useState } from "react";
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { IItem } from "../../../../shared/model/types";
import { IStepNumber, scenarioService } from "../../../../entities/scenario";
import { DropDownListSelected } from "../../../../shared/ui/dropDownSelected";
import classes from './stepNumber.module.scss'
import { IAdminMessageData } from "../../../../entities/adminMessage";

interface IProps {
    adminMessages: IAdminMessageData;
    setAdminMessage: (adminMessages: IAdminMessageData) => void;
    error?: string;
    setError?: (err: string) => void; 
}

export const StepNumber: FC<IProps> = ({adminMessages, setAdminMessage, error, setError}) => {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [selectedId, setSelectedId] = useState<number | null>(null)
    const {setGlobalMessage} = useGlobalMessageActions()
    
    const [items, setItems] = useState<IStepNumber[]>([])
    
    const getData = async () => {
        try {
            setIsLoading(true)
            const itemsRes = await scenarioService.getStepsNumbers(adminMessages.scenario_id)
            setItems(itemsRes)   
        }
        catch(e){
            console.log(e)
            setGlobalMessage({message: 'Ошибка при получении списка порядковых номеров шагов', type: 'error'})
        }
        finally{
            setIsLoading(false)
        }
    }


    const setItem = (item: {id: number, name: string}, selected: boolean) => { 
        const targetItem = items.find(i => i.id === item.id)
        setAdminMessage({...adminMessages, step_order: selected ? targetItem?.step_order || -1 : -1})
        if(selected && targetItem){
            setSelectedId(targetItem.id)
        } 
        else{
            setSelectedId(null)
        }
    }
    
    const onSelected = (item: IItem) => {
        return (selected: boolean) => {
            setItem(item, selected)
            setError && setError('')
        }
    }

    useEffect(() => {
        if(adminMessages.scenario_id !== -1){
            getData()
        }
    }, [adminMessages.scenario_id])

    return (
        <section className={classes.container}>
            {
                adminMessages.scenario_id === -1
                    ?
                <span className={classes.sign}>Выберите сценарий</span>
                    :
                <DropDownListSelected 
                    onSelected={onSelected}
                    isLoading={isLoading}
                    items={items.map(item => ({id: item.id, name: `${item.step_order}. ${item.name}`}))}
                    selectedIdItems={selectedId ? [selectedId] : []}
                />
            }
            <section className={classes.errorText}>
                {error}
            </section>
        </section>
    )
}