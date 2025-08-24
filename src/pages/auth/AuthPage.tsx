import classes from './auth.module.scss'
import { Auth } from '../../widgets/auth';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/store/store';


export default function AuthPage(){
    const router = useNavigate()
    const {user} = useAppSelector(s => s.userReducer) 

    if(user.isAuth){
        router('/', {
            replace: true
        })
    }

    
    return (
        !user.isAuth
            ?
        <section className={classes.wrapper}>
            <Auth />
        </section>
            :
        <></>
    )
}