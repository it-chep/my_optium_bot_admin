import { FC, useEffect, useState } from "react";
import classes from './userCardWidget.module.scss'
import { LoaderSpinner } from "../../../../shared/ui/spinner";
import { IUser, IUserData, UserCard, userService } from "../../../../entities/user";
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { Lists } from "../lists/Lists";
import { Posts } from "../posts/Posts";
import { AddUserData } from "../../../../features/addUserData";

interface IProps{
    currentUser: number;
}

export const UserCardWidget: FC<IProps> = ({currentUser}) => {


    const [isLoading, setIsLoading] = useState<boolean>(true)

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
            setGlobalMessage({message: 'Ошибка при получении информации о пользователе', type: 'error'})
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
                    <section className={classes.name}>{user.user.name}</section>
                    <UserCard user={user} />
                    <section className={classes.dataWrap}>
                        <h3>Состоит в списках</h3>
                        <section className={classes.listsWrap}>
                            <section className={classes.lists}>
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
                        <section className={classes.postsWrap}>
                            <section className={classes.posts}>
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
                </>
            }
        </section>
    )
}