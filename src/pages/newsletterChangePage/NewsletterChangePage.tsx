import { useLocation } from 'react-router-dom'
import { NewsletterDataChange } from '../../features/newsletterDataChange'
import { LayoutPages } from '../layoutPages'
import classes from './newsletterChangePage.module.scss'
import { NEWSLETTER_CREATE_ROUTE } from '../../app/router/routes'


export default function NewsletterChangePage(){

    const {pathname} = useLocation()
    const isCreate = pathname === NEWSLETTER_CREATE_ROUTE.path;

    return (
        <LayoutPages title={`${isCreate ? 'Создание' : 'Редактирование'} рассылки`}>
            <section className={classes.container}>
                <NewsletterDataChange />
            </section>
        </LayoutPages>
    )
}
