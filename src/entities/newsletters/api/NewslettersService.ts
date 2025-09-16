import { fetchAuth } from "../../../shared/api/ApiService"
import { IItem } from "../../../shared/model/types";
import { INewsletter, INewsletterData } from "../model/types"


class NewslettersService{

    controller: AbortController | null
    constructor(){
        this.controller = null;
    }

    async delete(id: number){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/newsletters/' + id, {
            method: "DELETE"
        })
    }

    async send(id: number){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + `/newsletters/${id}/send_letter`, {
            method: "POST"
        })
    }

    async get(id: number): Promise<INewsletterData> {
        const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + `/newsletters/${id}`)
        const {data}: {data: INewsletterData} = await res.json()
        return data
    }

    async getRecepientsCount(list_ids: number[]): Promise<number> {
        if(this.controller){
            this.controller.abort()
        }
        this.controller = new AbortController()
        const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + `/recepients_count`, {
            method: "POST",
            body: JSON.stringify({list_ids}),
            signal: this.controller.signal
        })
        const {counts}: {counts: number} = await res.json()
        this.controller = null;
        return counts
    }

    async sendTest(id: number){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + `/newsletters/${id}/send_test_letter`, {
            method: "POST"
        })
    }

    async getContentTypes(): Promise<IItem[]> {
        const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + `/content_types`)
        const {content_types}: {content_types: IItem[]} = await res.json()
        return content_types
    }

    async create(newsletter: INewsletterData){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + `/newsletters`, {
            method: "POST",
            body: JSON.stringify(newsletter)
        })
    }

    async update(newsletter: INewsletterData){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + `/newsletters/` + newsletter.id, {
            method: "POST",
            body: JSON.stringify(newsletter)
        })
    }

    async getAll(): Promise<INewsletter[]> {
        const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/newsletters')
        const {newsletters}: {newsletters: INewsletter[]} = await res.json() 
        return newsletters
    }

}

export const newslettersService = new NewslettersService()