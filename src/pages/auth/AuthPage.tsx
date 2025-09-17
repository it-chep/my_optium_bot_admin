import classes from './auth.module.scss'
import { Auth } from '../../widgets/auth';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/store/store';
import { HOME_ROUTE } from '../../app/router/routes';


export default function AuthPage(){

    const {my} = useAppSelector(s => s.myReducer) 

    if(my.isAuth){
        return <Navigate to={HOME_ROUTE.path} replace />
    }

    return (
        <section className={classes.wrapper}>
            <Auth />
        </section>
    )
}