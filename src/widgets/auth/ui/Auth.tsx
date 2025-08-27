import { FC, useState } from "react";
import classes from './auth.module.scss'
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/store/store";
import { userService, useUserActions } from "../../../entities/user";
import { MyInput } from "../../../shared/ui/input";
import { VisiblePassword } from "../../../features/visiblePassword";
import { MyButton } from "../../../shared/ui/button";


export const Auth: FC = () => {

    const router = useNavigate()

    const {user, isLoading, error} = useAppSelector(s => s.userReducer)
    const {setEmail, setIsAuth, setIsLoading, setError} = useUserActions()

    const [password, setPassword] = useState<string>('')

    const onClick = async () => {
        try{
            setIsLoading(true)
            // await new Promise(resolve => setTimeout(resolve, 2000))
            // await userService.login(user.email, password)
            setIsAuth(true)
            router('/', {
                replace: true
            })
        }
        catch(e){
            setError('Пользователь не авторизован')
            console.log(e)
        }
        finally{
            setIsLoading(false)
        }
    }

    return (
        <section className={classes.container}>
            <h1 className={classes.title}>Вход</h1>
            <MyInput 
                placeholder='Email' 
                value={user.email} 
                setValue={setEmail} 
                type="email" 
                isLoading={isLoading}
                setError={setError}
            />
            <VisiblePassword 
                value={password} 
                setValue={setPassword} 
                isLoading={isLoading}
                setError={setError}
            />
            <section className={classes.button}>
                <MyButton
                    onClick={onClick}
                    isLoading={isLoading}
                    error={error}
                >
                    Войти
                </MyButton>
            </section>
        </section>
    )
}