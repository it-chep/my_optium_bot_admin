import { useState } from 'react'
import { UsersWidget } from '../../widgets/users'
import { LayoutPages } from '../layoutPages'
import classes from './users.module.scss'
import { UserCardWidget } from '../../widgets/userCard'


export default function UsersPage(){

    const [currentUser, setCurrentUser] = useState<number | null>(null)

    return (
        <LayoutPages title='Пользователи'>
            <section className={classes.container}>
                <UsersWidget setCurrentUser={setCurrentUser}>
                    {
                        currentUser
                            &&
                        <UserCardWidget currentUser={currentUser} />
                    }
                </UsersWidget>
            </section>
        </LayoutPages>
    )
}
