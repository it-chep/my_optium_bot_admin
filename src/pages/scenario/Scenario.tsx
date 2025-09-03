import { ScenarioWidget } from '../../widgets/scenario'
import { LayoutPages } from '../layoutPages'
import classes from './scenario.module.scss'

export default function ScenarioPage(){

    return (
        <LayoutPages title='Настройки периодичности сценариев'>
            <section className={classes.container}>
                <ScenarioWidget />
            </section>
        </LayoutPages>
    )
}
