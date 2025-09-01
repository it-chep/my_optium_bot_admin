import { fetchAuth } from "../../../shared/api/ApiService"
import { IUser, IUserData } from "../model/types"



class UserService{

    async getUsers(): Promise<IUser[]> {

        // const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/users/')

        // await new Promise(resolve => setTimeout(resolve, 3000))

        // const {users}: {users: IUser[]} = await res.json()

        return [
            {
                "id": 1,
                "name": "Нечепорук Максим Алексеевич",
                "sex": "М",
                "tg_id": 123,
                "metrics_link": "https://music.yandex.ru/album/37514534",
                "birthday": "2004-05-11"
            }
        ]
    }

    async getUser(id: number): Promise<IUserData> {

        // const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/users/' + id)

        // await new Promise(resolve => setTimeout(resolve, 3000))

        // const {users}: {users: IUser[]} = await res.json()

        return {
            "user": {
                "id": 1,
                "name": "Нечепорук Максим Алексеевич",
                "sex": "М",
                "tg_id": 123,
                "metrics_link": "https://music.yandex.ru/album/37514534",
                "birthday": "2004-05-11"
            },
            "lists": [
                {
                "id": 2,
                "name": "Лаг 2"
                },
                {
                "id": 3,
                "name": "Новички"
                }
            ],
            "posts": [
                {
                    "id": 2,
                    "name": "234",
                    "is_required_theme": true
                }
            ],
            "scenarios": []
        }
    }
        
    async deleteUserList(userId: number, listId: number){
        // await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/users/' + userId + '/lists/' + listId, {
        //     method: "DELETE"
        // })
        await new Promise(resolve => setTimeout(resolve, 3000))
    }

    async deleteUserPost(userId: number, postId: number){
        // await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/users/' + userId + '/post/' + postId, {
        //     method: "DELETE"
        // })
        await new Promise(resolve => setTimeout(resolve, 3000))
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
}


export const userService = new UserService()