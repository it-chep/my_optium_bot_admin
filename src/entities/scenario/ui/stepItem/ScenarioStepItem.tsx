import { FC, PropsWithChildren } from "react";
import classes from './scenarioStepItem.module.scss'
import { Sign } from "../../../../shared/ui/sign";
import { IScenarioStep } from "../../model/types";

interface IProps{
    scenarioStep: IScenarioStep;
}

export const ScenarioStepItem: FC<IProps & PropsWithChildren> = ({scenarioStep, children}) => {


    return (
        <li className={classes.item}>
            <section className={classes.data}>
                <section className={classes.sign}>
                    <Sign sign="Название сценария">
                        {scenarioStep.scenario_name}
                    </Sign>
                </section>
                <section className={classes.sign}>
                    <Sign sign="Номер шага">
                        {scenarioStep.step_order}
                    </Sign>
                </section>
                <section className={classes.sign}>
                    <Sign sign="Текст сообщения">
                        {scenarioStep.text.slice(0, 50)}...
                    </Sign>
                </section>
            </section>
            <section className={classes.features}>
                {children}
            </section>
        </li>
    )
}