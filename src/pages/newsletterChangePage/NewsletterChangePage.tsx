import { NewsletterDataChange } from '../../features/newsletterDataChange'
import { LayoutPages } from '../layoutPages'
import classes from './newsletterChangePage.module.scss'


export default function NewsletterChangePage(){


    return (
        <LayoutPages title='Редактирование рассылки'>
            <section className={classes.container}>
                <NewsletterDataChange />
            </section>
        </LayoutPages>
    )
}
