import { FC, useEffect, useState } from "react";
import classes from './userCardWidget.module.scss'
import { LoaderSpinner } from "../../../../shared/ui/spinner";
import { IUserData, UserCard, userService } from "../../../../entities/user";
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { Lists } from "../lists/Lists";
import { Posts } from "../posts/Posts";
import { AddUserData } from "../../../../features/addUserData";
import { MyButton } from "../../../../shared/ui/button";
import { Scenarios } from "../scenarios/Scenarios";
import { AuthError } from "../../../../shared/lib/helpers/AuthError";
import { useMyActions } from "../../../../entities/my";
import { IItem } from "../../../../shared/model/types";
import { IInformationPost } from "../../../../entities/informationPost";

interface IProps{
    currentUser: number;
    setCurrentUser: (currentUser: number | null) => void;
}

export const UserCardWidget: FC<IProps> = ({currentUser, setCurrentUser}) => {


    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {setIsAuth} = useMyActions()
    const [user, setUser] = useState<IUserData>()
    const [postInfs, setPostInfs] = useState<IInformationPost[]>([])

    const setList = (item: IUserData['lists'][0], selected: boolean) => {
        if(user){
            const target = [...user.lists]
            if(selected){
                target.push(item)
            }
            else{
                const targetInd = target.findIndex(list => list.id === item.id)
                if(targetInd >= 0){
                    target.splice(targetInd, 1)
                }
            }
            setUser({...user, lists: target})
        }
    }

    const setPost = (item: IItem, selected: boolean) => {
        if(user){
            const target = [...user.posts]
            if(selected){
                const targetItem = postInfs.find(p => p.id === item.id)
                if(targetItem){
                    target.push({...targetItem, is_required_theme: targetItem.is_theme_required})
                }
            }
            else{
                const targetInd = target.findIndex(list => list.id === item.id)
                if(targetInd >= 0){
                    target.splice(targetInd, 1)
                }
            }
            setUser({...user, posts: target})
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
                                setLists={setList} 
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
                                setLists={setPost} 
                                setPostInfs={setPostInfs}
                                type="posts" 
                                userItems={user.posts} 
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