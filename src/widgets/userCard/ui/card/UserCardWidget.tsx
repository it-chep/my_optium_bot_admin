import { FC, useEffect, useState } from "react";
import classes from './userCardWidget.module.scss'
import { LoaderSpinner } from "../../../../shared/ui/spinner";
import { IUser, IUserData, UserCard, userService } from "../../../../entities/user";
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { Lists } from "../lists/Lists";
import { Posts } from "../posts/Posts";
import { AddUserData } from "../../../../features/addUserData";
import { MyButton } from "../../../../shared/ui/button";
import { Scenarios } from "../scenarios/Scenarios";
import { AuthError } from "../../../../shared/lib/helpers/AuthError";
import { useMyActions } from "../../../../entities/my";

interface IProps{
    currentUser: number;
    setCurrentUser: (currentUser: number | null) => void;
}

export const UserCardWidget: FC<IProps> = ({currentUser, setCurrentUser}) => {


    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {setIsAuth} = useMyActions()
    const [user, setUser] = useState<IUserData>()

    const setLists = (item: IUserData['lists'][0], selected: boolean) => {
        if(user){
            const target = [...user.lists]
            if(selected){
                target.push(item)
            }
            else{
                const targetInd = target.findIndex(list => list.name === item.name)
                if(targetInd >= 0){
                    target.splice(targetInd, 1)
                }
            }
            setUser({...user, lists: target})
        }
    }

    const {setGlobalMessage} = useGlobalMessageActions()

    const getData = async () => {
        try{
            setIsLoading(true)
            const userRes = await userService.getUser(currentUser)
            setUser(userRes)
        }
        catch(e){
            console.log(e)
            if(e instanceof AuthError){
                setIsAuth(false)
                setGlobalMessage({message: e.message, type: 'error'})
            }
            else{
                setCurrentUser(null)
                setGlobalMessage({message: 'Ошибка при получении информации о пользователе', type: 'error'})
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
                user
                    &&
                <>
                    <section className={classes.name}>
                        {user.user.name}
                        <section className={classes.button}>
                            <MyButton onClick={() => setCurrentUser(null)}>Закрыть</MyButton>
                        </section>
                    </section>
                    <UserCard user={user} />
                    <section className={classes.dataWrap}>
                        <h3>Состоит в списках</h3>
                        <section className={classes.dataContainer}>
                            <section className={classes.data}>
                                <Lists user={user} />
                            </section>
                            <AddUserData 
                                userId={currentUser} 
                                setLists={setLists} 
                                type="lists" 
                                userItems={user.lists} 
                            />
                        </section>
                    </section>
                    <section className={classes.dataWrap}>
                        <h3>Не отправленные информационные посты</h3>
                        <section className={classes.dataContainer}>
                            <section className={classes.data}>
                                <Posts user={user} />
                            </section>
                            <AddUserData 
                                userId={currentUser} 
                                setLists={setLists} 
                                type="posts" 
                                userItems={user.lists} 
                            />
                        </section>
                    </section>
                    <section className={classes.dataWrap}>
                        <h3>Следующий запуск сценария</h3>
                        <section className={classes.dataContainer}>
                                <Scenarios user={user} setUser={setUser} />
                        </section>
                    </section>
                </>
            }
        </section>
    )
}