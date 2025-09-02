import { InformationPostsWidget } from '../../widgets/informationPosts'
import { LayoutPages } from '../layoutPages'
import classes from './informationPosts.module.scss'


export default function InformationPostsPage(){


    return (
        <LayoutPages title='Информационные посты'>
            <section className={classes.container}>
                <InformationPostsWidget />
            </section>
        </LayoutPages>
    )
}
