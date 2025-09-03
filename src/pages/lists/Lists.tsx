import { ListsWidget } from '../../widgets/lists'
import { LayoutPages } from '../layoutPages'
import classes from './lists.module.scss'


export default function ListsPage(){


    return (
        <LayoutPages title='Списки рассылок'>
            <section className={classes.container}>
                <ListsWidget />
            </section>
        </LayoutPages>
    )
}
