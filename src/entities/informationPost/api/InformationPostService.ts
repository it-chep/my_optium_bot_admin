import { fetchAuth } from "../../../shared/api/ApiService"
import { IInformationPostData } from "../model/types"





class InformationPostService {

    async delete(id: number){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/information_post/' + id, {
            method: "DELETE"
        })
    }
    
    async create(post: IInformationPostData){
        // await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/information_posts/', {
        //     method: "POST",
        //     body: JSON.stringify({post})
        // })
        await new Promise(resolve => setTimeout(resolve, 1000))
    }

     async update(post: IInformationPostData){
        // await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/information_posts/', {
        //     method: "POST",
        //     body: JSON.stringify({post})
        // })
        await new Promise(resolve => setTimeout(resolve, 1000))
    }

    async get(id: number): Promise<IInformationPostData> {
        // const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/information_posts/' + id)
        // const {}: {} = await res.json()

        return {
            id: 1,
            post_name: 'Name',
            theme_id: 3,
            message: 'message',
            order: 24,
            media_id: 'url',
            content_type_id: 1,
        }
    }
    
    async getAll(){
        // const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/information_posts')
        // const {posts} = await res.json() 

        return [
            {
                "id": 5,
                "name": "Sample Post",
                "theme_name": "Обязательный контент",
                "order": 1,
                "is_theme_required": true
            },
            {
                "id": 4,
                "name": "Sample Post",
                "theme_name": "Обязательный контент",
                "order": 1,
                "is_theme_required": true
            },
            {
                "id": 1,
                "name": "123",
                "theme_name": "Обязательный контент",
                "order": 1,
                "is_theme_required": true
            },
            {
                "id": 2,
                "name": "234",
                "theme_name": "Мотивация",
                "order": 1,
                "is_theme_required": true
            },
            {
                "id": 3,
                "name": "456",
                "theme_name": "Подготовка к новому этапу",
                "order": 1,
                "is_theme_required": true
            }
        ]
    }

}

export const informationPostService = new InformationPostService()