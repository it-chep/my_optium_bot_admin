import { FC, useEffect, useState } from "react";
import classes from './scenarioMessagesWidget.module.scss'
import { useGlobalMessageActions } from "../../../entities/globalMessage";
import { LoaderSpinner } from "../../../shared/ui/spinner";
import { scenarioService, ScenarioStepItem, useScenarioStepDataActions } from "../../../entities/scenario";
import { EditAction } from "../../../features/editAction";
import { IScenarioStep } from "../../../entities/scenario/model/types";
import { SCENARIO_MESSAGE_UPDATE_ROUTE } from "../../../app/router/routes";
import { AuthError } from "../../../shared/lib/helpers/AuthError";
import { useMyActions } from "../../../entities/my";


export const ScenarioMessagesWidget: FC = () => {

    const [steps, setSteps] = useState<IScenarioStep[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {setGlobalMessage} = useGlobalMessageActions()
    const {setIsAuth} = useMyActions()
    const {setScenarioStepData} = useScenarioStepDataActions()

    const getData = async () => {
        try{
            setIsLoading(true)
            const messagesRes = await scenarioService.getSteps()
            setSteps(messagesRes)
        }
        catch(e){
            console.log(e)
            if(e instanceof AuthError){
                setIsAuth(false)
                setGlobalMessage({message: e.message, type: 'error'})
            }
            else{
                setGlobalMessage({message: 'Ошибка при получении списка текстов сообщений сценариев', type: 'error'})
            }
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const onEdit = (step: IScenarioStep) => {
        setScenarioStepData(step)
    }

    return (
        <section className={classes.container}>
            {
                isLoading
                    ?
                <section className={classes.loader}><LoaderSpinner /></section>
                    :
                <ul className={classes.step}>
                    {steps.map(step => 
                        <ScenarioStepItem key={step.id} scenarioStep={step}>
                            <EditAction
                                toPath={SCENARIO_MESSAGE_UPDATE_ROUTE.path}
                                onEdit={() => onEdit(step)}
                            />
                        </ScenarioStepItem>
                    )}
                </ul>
            }
        </section>
    )
}