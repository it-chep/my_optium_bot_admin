import { fetchAuth } from "../../../shared/api/ApiService"



class ListService {

    async delete(id: number){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/users-lists/' + id, {
            method: "DELETE"
        })
    }

    async create(name: string){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/users-lists/', {
            method: "POST",
            body: JSON.stringify({name})
        })
    }

    async getAll(){
        // const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/users-lists/')
        // const {lists} = await res.json() 

        return [
            {
                "id": 6,
                "name": "Список крутых",
                "users_count": 0
            },
            {
                "id": 3,
                "name": "Новички",
                "users_count": 2
            },
            {
                "id": 5,
                "name": "Автобусу",
                "users_count": 0
            },
            {
                "id": 4,
                "name": "Фреш ",
                "users_count": 0
            },
            {
                "id": 2,
                "name": "Лаг 2",
                "users_count": 2
            }
        ]
    }

}

export const listService = new ListService()