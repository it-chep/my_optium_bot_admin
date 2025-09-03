import { FC, useEffect, useState } from "react";
import classes from './scenarioWidget.module.scss'
import { useGlobalMessageActions } from "../../../entities/globalMessage";
import { LoaderSpinner } from "../../../shared/ui/spinner";
import { IScenario, ScenarioItem, scenarioService, useScenarioActions } from "../../../entities/scenario";
import { SCENARIO_UPDATE_ROUTE } from "../../../app/router/routes";
import { EditAction } from "../../../features/editAction";


export const ScenarioWidget: FC = () => {

    const [scenarios, setScenarios] = useState<IScenario[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {setGlobalMessage} = useGlobalMessageActions()

    const {setScenario} = useScenarioActions()

    const getData = async () => {
        try{
            setIsLoading(true)
            const scenariosRes = await scenarioService.getScenarios()
            setScenarios(scenariosRes)
        }
        catch(e){
            console.log(e)
            setGlobalMessage({message: 'Ошибка при получении списка сценариев', type: 'error'})
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const onEdit = (scenario: IScenario) => {
        setScenario(scenario)
    }

    return (
        <section className={classes.container}>
            {
                isLoading
                    ?
                <section className={classes.loader}><LoaderSpinner /></section>
                    :
                <ul className={classes.step}>
                    {scenarios.map(scenario => 
                        <ScenarioItem key={scenario.id} scenario={scenario}>
                            <EditAction
                                toPath={SCENARIO_UPDATE_ROUTE.path}
                                onEdit={() => onEdit(scenario)}
                            />
                        </ScenarioItem>
                    )}
                </ul>
            }
        </section>
    )
}