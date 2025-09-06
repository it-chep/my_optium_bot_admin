import { fetchAuth } from "../../../shared/api/ApiService"
import { IPost } from "../model/types"



class PostService {

    async delete(id: number){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/posts_themes/' + id, {
            method: "DELETE"
        })
    }

    async create(post: IPost){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/posts_themes', {
            method: "POST",
            body: JSON.stringify({...post})
        })
    }

    async update(post: IPost){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/posts_themes/' + post.id, {
            method: "POST",
            body: JSON.stringify({...post})
        })
    }
 
    async getAll(): Promise<IPost[]> {
        // const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/posts_themes')
        // const {themes}: {themes: IPost[]} = await res.json() 
        return [
    {
      "id": 1,
      "name": "Обязательный контент",
      "is_theme_required": true
    },
    {
      "id": 2,
      "name": "Мотивация",
      "is_theme_required": true
    },
    {
      "id": 3,
      "name": "Подготовка к новому этапу",
      "is_theme_required": true
    },
    {
      "id": 4,
      "name": "Тема херня",
      "is_theme_required": true
    },
    {
      "id": 5,
      "name": "Тема херня",
      "is_theme_required": false
    }
  ]
    }

}

export const postService = new PostService()