import { NewslettersWidget } from '../../widgets/newslettersWidget'
import { LayoutPages } from '../layoutPages'
import classes from './newslettersPage.module.scss'


export default function NewslettersPage(){


    return (
        <section className={classes.container}>
            <LayoutPages title='Рассылки'>
                <section className={classes.container}>
                    <NewslettersWidget />
                </section>
            </LayoutPages>
        </section>
    )
}