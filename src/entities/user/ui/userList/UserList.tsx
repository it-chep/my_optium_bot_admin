import { FC, PropsWithChildren } from "react";
import classes from './userList.module.scss'
import { IUser } from "../../model/types";
import { MyButton } from "../../../../shared/ui/button";

interface IProps{
    users: IUser[];
    setCurrentUser: (currentUser: number) => void
}

export const UserList: FC<IProps> = ({users, setCurrentUser}) => {


    return (
        <table className={classes.list}>
            <thead>
                <tr>
                    <th>tg_ID</th>
                    <th>Пол</th>
                    <th>Ссылка на метрики</th>
                    <th>Дата рождения</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => 
                    <tr 
                        className={classes.user}
                        key={user.id}
                    >
                        <td>{user.tg_id}</td>
                        <td>{user.sex}</td>
                        <td><a href={user.metrics_link} target="_blank">ссылка</a></td>
                        <td>{user.birthday}</td>
                        <td> 
                            <section className={classes.button}><MyButton onClick={() => setCurrentUser(user.id)}>Подробнее</MyButton></section>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}