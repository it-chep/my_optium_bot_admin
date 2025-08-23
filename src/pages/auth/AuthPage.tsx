import { useLocation } from 'react-router-dom'
import classes from './auth.module.scss'
import { LOGIN_ROUTE } from '../../app/router/routes'
import { MyInput } from '../../shared/ui/input';
import { useAppSelector } from '../../app/store/store';
import { useUserActions } from '../../entities/user';
import { useState } from 'react';
import { VisiblePassword } from '../../features/visiblePassword';


export default function AuthPage(){

    const {pathname} = useLocation()

    const isLogin = pathname === LOGIN_ROUTE.path;

    const {user} = useAppSelector(s => s.userReducer)
    const {setEmail} = useUserActions()

    const [password, setPassword] = useState<string>('')

    const onClick = () => {
        try{

        }
        catch(e){
            console.log(e)
        }
        finally{
            
        }
    }

    return (
        <section className={classes.wrapper}>
            <section className={classes.container}>
                <h1 className={classes.title}>{isLogin ? 'Вход' : 'Регистрация'}</h1>
                <MyInput placeholder='Email' value={user.email} setValue={setEmail} type="email" />
                <VisiblePassword value={password} setValue={setPassword} />
            </section>
        </section>
    )
}