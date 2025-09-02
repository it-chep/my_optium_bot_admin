import { AdminMessagesWidget } from '../../widgets/adminMessages'
import { LayoutPages } from '../layoutPages'
import classes from './adminMessages.module.scss'


export default function AdminMessagesPage(){


    return (
        <LayoutPages title='Тексты админских сообщений'>
            <section className={classes.container}>
                <AdminMessagesWidget />
            </section>
        </LayoutPages>
    )
}
