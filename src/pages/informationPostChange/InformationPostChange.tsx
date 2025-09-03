import { useLocation } from 'react-router-dom';
import { INFORMATION_POST_CREATE_ROUTE } from '../../app/router/routes';
import { LayoutPages } from '../layoutPages'
import classes from './informationPostChange.module.scss'
import { InformationPostChange } from '../../features/informationPostChange';


export default function InformationPostChangePage(){

    const {pathname} = useLocation()
    const isCreate = pathname === INFORMATION_POST_CREATE_ROUTE.path;

    return (
        <LayoutPages title={`${isCreate ? 'Создание' : 'Редактирование'} информационного поста`}>
            <section className={classes.container}>
                <InformationPostChange isCreate={isCreate} />
            </section>
        </LayoutPages>
    )
}
