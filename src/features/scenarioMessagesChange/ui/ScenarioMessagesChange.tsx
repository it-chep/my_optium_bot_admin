import { FC } from "react";
import classes from './scenarioMessagesChange.module.scss'
import { useAppSelector } from "../../../app/store/store";
import { scenarioService, useScenarioStepDataActions } from "../../../entities/scenario";
import { MyButton } from "../../../shared/ui/button";
import { useGlobalLoadingActions } from "../../../entities/globalLoading";
import { useGlobalMessageActions } from "../../../entities/globalMessage";
import { useNavigate } from "react-router-dom";
import { Sign } from "../../../shared/ui/sign";
import { SCENARIO_MESSAGES_ROUTE } from "../../../app/router/routes";
import { MyTextarea } from "../../../shared/ui/textarea";

export const ScenarioMessagesChange: FC = () => {

    const {scenarioStepData} = useAppSelector(s => s.scenarioStepReducer)

    const {setText} = useScenarioStepDataActions()

    const {setIsLoading} = useGlobalLoadingActions()
    const {setGlobalMessage} = useGlobalMessageActions()
    const router = useNavigate()

    const setData = async () => {
        try{
            setIsLoading(true)
            await scenarioService.updateStep(scenarioStepData.id, scenarioStepData.text)
            setGlobalMessage({message: 'Текст сообщения сценария обновлено', type: 'ok'})
            router(SCENARIO_MESSAGES_ROUTE.path)
        }
        catch(e){
            console.log(e)
            setGlobalMessage({message: 'Ошибка при обновлении текста сообщения сценария', type: 'error'})
        }
        finally{
            setIsLoading(false)
        }
    }

    return (
        <section className={classes.container}>
            <section className={classes.sign}>
                <Sign sign="Название сценария">
                    {scenarioStepData.scenario_name}
                </Sign>
            </section>
            <MyTextarea
                title="Текст сообщения"
                value={scenarioStepData.text}
                setValue={setText}
            />
            <section onClick={setData} className={classes.button}>
                <MyButton>Обновить</MyButton>
            </section>
        </section>
    )
}