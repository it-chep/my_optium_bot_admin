import { ScenarioMessagesWidget } from '../../widgets/scenarioMessages'
import { LayoutPages } from '../layoutPages'
import classes from './scenarioMessages.module.scss'


export default function ScenarioMessagesPage(){


    return (
        <LayoutPages title='Тексты сообщений сценариев'>
            <section className={classes.container}>
                <ScenarioMessagesWidget />
            </section>
        </LayoutPages>
    )
}
