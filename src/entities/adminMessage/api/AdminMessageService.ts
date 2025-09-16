import { fetchAuth } from "../../../shared/api/ApiService"
import { IAdminMessage, IAdminMessageData } from "../model/types"


class AdminMessageService{

    async create(adminMessages: IAdminMessageData){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/messages', {
            method: "POST",
            body: JSON.stringify({...adminMessages})
        })
    }

    async delete(id: number, type: number){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/messages/' + id, {
            method: "POST",
            body: JSON.stringify({type})
        })
    }

    async getAll(): Promise<IAdminMessage[]>{
        const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/messages')
        const {messages}: {messages: IAdminMessage[]} = await res.json()
        return messages
    }
}

export const adminMessageService = new AdminMessageService()