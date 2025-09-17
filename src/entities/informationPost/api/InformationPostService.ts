import { fetchAuth } from "../../../shared/api/ApiService"
import { IInformationPost, IInformationPostData } from "../model/types"


class InformationPostService {

    async delete(id: number){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/information_posts/' + id, {
            method: "DELETE"
        })
    }
    
    async create(post: IInformationPostData){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/information_posts', {
            method: "POST",
            body: JSON.stringify({...post})
        })
    }

     async update(post: IInformationPostData){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/information_posts/' + post.id, {
            method: "POST",
            body: JSON.stringify({...post})
        })
    }

    async get(id: number): Promise<IInformationPostData> {
        const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/information_posts/' + id)
        const {post}: {post: IInformationPostData} = await res.json()
        return post
    }
    
    async getAll(): Promise<IInformationPost[]>{
        const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/information_posts')
        const {posts}: {posts: IInformationPost[]} = await res.json() 
        return posts
    }

}

export const informationPostService = new InformationPostService()