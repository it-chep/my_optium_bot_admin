import { ListsWidget } from '../../widgets/lists'
import { LayoutPages } from '../layoutPages'
import classes from './postsThemes.module.scss'


export default function PostsThemesPage(){


    return (
        <LayoutPages title='Темы постов'>
            <section className={classes.container}>
                <ListsWidget />
            </section>
        </LayoutPages>
    )
}
