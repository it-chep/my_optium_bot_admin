import { useLocation } from 'react-router-dom';
import { LIST_CREATE_ROUTE } from '../../app/router/routes';
import { LayoutPages } from '../layoutPages'
import classes from './listChange.module.scss'
import { ListChange } from '../../features/listChange';


export default function ListChangePage(){

    const {pathname} = useLocation()
    const isCreate = pathname === LIST_CREATE_ROUTE.path;

    return (
        <LayoutPages title={`${isCreate ? 'Создание' : 'Редактирование'} списка рассылок`}>
            <section className={classes.container}>
                <ListChange isCreate={isCreate} />
            </section>
        </LayoutPages>
    )
}
