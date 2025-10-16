import { useState } from 'react'
import { UsersWidget } from '../../widgets/users'
import { LayoutPages } from '../layoutPages'
import classes from './users.module.scss'
import { UserCardWidget } from '../../widgets/userCard'
import { IUser } from '../../entities/user'


export default function UsersPage(){

    const [currentUser, setCurrentUser] = useState<number | null>(null)
    const [users, setUsers] = useState<IUser[]>([])

    return (
        <LayoutPages title='Пользователи'>
            <section className={classes.container}>
                <UsersWidget 
                    users={users} 
                    setUsers={setUsers} 
                    setCurrentUser={setCurrentUser}
                >
                    {
                        currentUser
                            &&
                        <UserCardWidget 
                            users={users} 
                            setUsers={setUsers} 
                            setCurrentUser={setCurrentUser} 
                            currentUser={currentUser} 
                        />
                    }
                </UsersWidget>
            </section>
        </LayoutPages>
    )
}
