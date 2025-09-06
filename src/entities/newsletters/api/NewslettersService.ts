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
        // const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + `/content_types`)
        // const {content_types}: {content_types: IItem[]} = await res.json()
        return [
            {
                id: 1,
                name: 'фото'
            },
            {
                id: 2,
                name: 'видео'
            }
        ]
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
        // const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/newsletters')
        // const {newsletters}: {newsletters: INewsletter[]} = await res.json() 
        return [
    {
      "id": 1,
      "name": "Первая",
      "status_id": 1,
      "status_name": "Черновик",
      "users_count": 123
    },
    {
      "id": 2,
      "name": "Вторая",
      "status_id": 2,
      "status_name": "Отправляется",
      "users_count": 12
    },
    {
      "id": 3,
      "name": "тест",
      "status_id": 1,
      "status_name": "Черновик",
      "users_count": 2
    },
    {
      "id": 4,
      "name": "Пример рассылки",
      "status_id": 1,
      "status_name": "Черновик",
      "users_count": 2
    }
  ]
    }

}

export const newslettersService = new NewslettersService()