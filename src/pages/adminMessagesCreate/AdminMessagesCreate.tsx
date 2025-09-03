import { AdminMessageChange } from '../../features/adminMessageChange'
import { LayoutPages } from '../layoutPages'
import classes from './adminMessagesCreate.module.scss'


export default function AdminMessagesCreatePage(){

    return (
        <LayoutPages title='Создание текста админского сообщения'>
            <section className={classes.container}>
                <AdminMessageChange />
            </section>
        </LayoutPages>
    )
}
