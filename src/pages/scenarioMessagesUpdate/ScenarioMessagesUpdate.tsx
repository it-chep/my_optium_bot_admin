import { ScenarioMessagesChange } from '../../features/scenarioMessagesChange'
import { LayoutPages } from '../layoutPages'
import classes from './scenarioMessagesUpdate.module.scss'


export default function ScenarioMessagesUpdatePage(){

    return (
        <LayoutPages title='Редактирование текста сообщения сценария'>
            <section className={classes.container}>
                <ScenarioMessagesChange />
            </section>
        </LayoutPages>
    )
}
