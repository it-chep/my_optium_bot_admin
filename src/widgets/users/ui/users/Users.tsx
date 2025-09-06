import { FC, PropsWithChildren, useEffect, useState } from "react";
import classes from './users.module.scss'
import { IUser } from "../../../../entities/user/model/types";
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { UserList, userService } from "../../../../entities/user";
import { LoaderSpinner } from "../../../../shared/ui/spinner";
import { AuthError } from "../../../../shared/lib/helpers/AuthError";
import { useMyActions } from "../../../../entities/my";

interface IProps {
    setCurrentUser: (currentUser: number) => void
}

export const UsersWidget: FC<IProps & PropsWithChildren> = ({setCurrentUser, children}) => {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [users, setUsers] = useState<IUser[]>([])
    const {setGlobalMessage} = useGlobalMessageActions()
    const {setIsAuth} = useMyActions()

    const getData = async () => {
        try{
            setIsLoading(true)
            const usersRes = await userService.getUsers()
            setUsers(usersRes)
        }
        catch(e){
            console.log(e)
            if(e instanceof AuthError){
                setIsAuth(false)
                setGlobalMessage({message: e.message, type: 'error'})
            }
            else{
                setGlobalMessage({message: 'Ошибка при получении списка пользователей', type: 'error'})
            }
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <section className={classes.container}>
            {
                isLoading
                    ?
                <section className={classes.loader}><LoaderSpinner /></section>
                    :
                <section className={classes.content}>
                    <ul className={classes.leftPanel}>
                        <li className={classes.title}>ФИО</li>
                        {users.map(user => 
                            <li 
                                key={user.id} 
                                className={classes.fio}
                            >
                                {user.name}
                            </li>
                        )}
                    </ul>
                    {
                        children
                            ||
                        <UserList users={users} setCurrentUser={setCurrentUser} />
                    }
                </section>
            }
        </section>
    )
}