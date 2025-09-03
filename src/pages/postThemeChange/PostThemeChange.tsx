import { useLocation } from 'react-router-dom';
import { POST_THEME_CREATE_ROUTE } from '../../app/router/routes';
import { LayoutPages } from '../layoutPages'
import classes from './postThemeChange.module.scss'
import { PostThemeChange } from '../../features/postThemeChange';


export default function PostThemeChangePage(){

    const {pathname} = useLocation()
    const isCreate = pathname === POST_THEME_CREATE_ROUTE.path;

    return (
        <LayoutPages title={`${isCreate ? 'Создание' : 'Редактирование'} темы поста`}>
            <section className={classes.container}>
                <PostThemeChange isCreate={isCreate} />
            </section>
        </LayoutPages>
    )
}
