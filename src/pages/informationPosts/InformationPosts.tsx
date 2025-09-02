import { ListsWidget } from '../../widgets/lists'
import { LayoutPages } from '../layoutPages'
import classes from './informationPosts.module.scss'


export default function InformationPosts(){


    return (
        <LayoutPages title='Списки рассылок'>
            <section className={classes.container}>
                <ListsWidget />
            </section>
        </LayoutPages>
    )
}
