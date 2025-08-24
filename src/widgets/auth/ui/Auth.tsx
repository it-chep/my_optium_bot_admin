import { FC, useState } from "react";
import classes from './auth.module.scss'
import { useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../../app/router/routes";
import { useAppSelector } from "../../../app/store/store";
import { IUser, userService, useUserActions } from "../../../entities/user";
import { MyInput } from "../../../shared/ui/input";
import { VisiblePassword } from "../../../features/visiblePassword";
import { Link } from "react-router-dom";
import { MyButton } from "../../../shared/ui/button";


export const Auth: FC = () => {

    const {pathname} = useLocation()

    const isLogin = pathname === LOGIN_ROUTE.path;

    const router = useNavigate()

    const {user, isLoading} = useAppSelector(s => s.userReducer)
    const {setEmail, setIsAuth, setIsLoading} = useUserActions()

    const [password, setPassword] = useState<string>('')

    const onClick = async () => {
        try{
            setIsLoading(true)
            let userRes: IUser | null;
            if(isLogin){
                userRes = await userService.login(user.email, password)
            }
            else{
                userRes = await userService.registration(user.email, password)
            }
            setIsAuth(true)
            router('/', {
                replace: true
            })
        }
        catch(e){
            console.log(e)
        }
        finally{
            setIsLoading(false)
        }
    }

    return (
        <section className={classes.container}>
            <h1 className={classes.title}>{isLogin ? 'Вход' : 'Регистрация'}</h1>
            <MyInput placeholder='Email' value={user.email} setValue={setEmail} type="email" />
            <VisiblePassword value={password} setValue={setPassword} />
            <section className={classes.link}>
                <Link to={isLogin ? '/registration' : '/login'}>{isLogin ? 'Зарегистрироваться' : 'Войти'}</Link>
            </section>
            <section className={classes.button}>
                <MyButton
                    onClick={onClick}
                    isLoading={isLoading}
                >
                    {isLogin ? 'Войти' : 'Зарегистрироваться'}
                </MyButton>
            </section>
        </section>
    )
}