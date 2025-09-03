import { FC, PropsWithChildren } from "react";
import classes from './scenarioItem.module.scss'
import { Sign } from "../../../../shared/ui/sign";
import { IScenario } from "../../model/types";

interface IProps{
    scenario: IScenario;
}

export const ScenarioItem: FC<IProps & PropsWithChildren> = ({scenario, children}) => {


    return (
        <li className={classes.item}>
            <section className={classes.data}>
                <section className={classes.sign}>
                    <Sign sign="Название сценария">
                        {scenario.name}
                    </Sign>
                </section>
                <section className={classes.sign}>
                    <Sign sign="Текущая периодичность">
                        {scenario.delay}
                    </Sign>
                </section>
            </section>
            <section className={classes.features}>
                {children}
            </section>
        </li>
    )
}