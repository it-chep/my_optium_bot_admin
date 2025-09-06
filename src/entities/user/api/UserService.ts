import { fetchAuth } from "../../../shared/api/ApiService"
import { IUser, IUserData } from "../model/types"



class UserService{

    async getUsers(): Promise<IUser[]> {
        const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/users/')
        const {users}: {users: IUser[]} = await res.json()
        return users
    }

    async getUser(id: number): Promise<IUserData> {
        const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/users/' + id)
        const {user}: {user: IUserData} = await res.json()
        return user
    }
        
    async deleteUserList(userId: number, listId: number){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/users/' + userId + '/lists/' + listId, {
            method: "DELETE"
        })
    }

    async deleteUserPost(userId: number, postId: number){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/users/' + userId + '/post/' + postId, {
            method: "DELETE"
        })
    }

    async setList(userId: number, listId: number){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/users/' + userId + '/lists/' + listId, {
            method: "POST"
        })
    }
    async setPost(userId: number, postId: number){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/users/' + userId + '/post/' + postId, {
            method: "POST"
        })
    }

    async setScenarioDatetime(userId: number, scheduled_time: string) {
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/users/' + userId + '/scheduled_time', {
            method: "POST",
            body: JSON.stringify({scheduled_time})
        })
    }
}


export const userService = new UserService()