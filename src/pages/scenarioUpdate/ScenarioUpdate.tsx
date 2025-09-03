import { ScenarioChange } from '../../features/scenarioChange'
import { LayoutPages } from '../layoutPages'
import classes from './scenarioUpdate.module.scss'


export default function ScenarioUpdatePage(){

    return (
        <LayoutPages title='Изменить периодичность сценария'>
            <section className={classes.container}>
                <ScenarioChange />
            </section>
        </LayoutPages>
    )
}
