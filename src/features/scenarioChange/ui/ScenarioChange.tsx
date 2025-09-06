import { FC } from "react";
import classes from './scenarioChange.module.scss'
import { useAppSelector } from "../../../app/store/store";
import { scenarioService, useScenarioActions } from "../../../entities/scenario";
import { MyButton } from "../../../shared/ui/button";
import { useGlobalLoadingActions } from "../../../entities/globalLoading";
import { useGlobalMessageActions } from "../../../entities/globalMessage";
import { useNavigate } from "react-router-dom";
import { Sign } from "../../../shared/ui/sign";
import { SCENARIO_MESSAGES_ROUTE } from "../../../app/router/routes";
import { MyInput } from "../../../shared/ui/input";
import { AuthError } from "../../../shared/lib/helpers/AuthError";
import { useMyActions } from "../../../entities/my";

export const ScenarioChange: FC = () => {

    const {scenario} = useAppSelector(s => s.scenarioReducer)
    const {setDelay} = useScenarioActions()

    const {setIsLoading} = useGlobalLoadingActions()
    const {setGlobalMessage} = useGlobalMessageActions()
    const {setIsAuth} = useMyActions()
    const router = useNavigate()

    const setData = async () => {
        try{
            setIsLoading(true)
            await scenarioService.update(scenario.id, scenario.delay)
            setGlobalMessage({message: 'Периодичность сценария обновлена', type: 'ok'})
            router(SCENARIO_MESSAGES_ROUTE.path)
        }
        catch(e){
            console.log(e)
            if(e instanceof AuthError){
                setIsAuth(false)
                setGlobalMessage({message: e.message, type: 'error'})
            }
            else{
                setGlobalMessage({message: 'Ошибка при обновлении периодичности сценария', type: 'error'})
            }
        }
        finally{
            setIsLoading(false)
        }
    }

    return (
        <section className={classes.container}>
            <section className={classes.sign}>
                <Sign sign="Название сценария">
                    {scenario.name}
                </Sign>
            </section>
            <MyInput
                title="Текущая периодичность (1 second, 1 minute, 1 hour и тд)"
                value={scenario.delay}
                setValue={setDelay}
            />
            <section onClick={setData} className={classes.button}>
                <MyButton>Обновить</MyButton>
            </section>
        </section>
    )
}