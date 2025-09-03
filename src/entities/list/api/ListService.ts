import { fetchAuth } from "../../../shared/api/ApiService"



class ListService {

    async delete(id: number){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/users-lists/' + id, {
            method: "DELETE"
        })
    }

    async create(name: string){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/users-lists', {
            method: "POST",
            body: JSON.stringify({name})
        })
    }

    async update(id: number, name: string){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/users-lists/' + id, {
            method: "POST",
            body: JSON.stringify({name})
        })
    }

    async getAll(){
        const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/users-lists')
        const {lists} = await res.json() 
        return lists
    }

}

export const listService = new ListService()