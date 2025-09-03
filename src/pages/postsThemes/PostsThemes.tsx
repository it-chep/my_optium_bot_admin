import { PostsThemesWidget } from '../../widgets/postsThemes'
import { LayoutPages } from '../layoutPages'
import classes from './postsThemes.module.scss'


export default function PostsThemesPage(){


    return (
        <LayoutPages title='Темы постов'>
            <section className={classes.container}>
                <PostsThemesWidget />
            </section>
        </LayoutPages>
    )
}
