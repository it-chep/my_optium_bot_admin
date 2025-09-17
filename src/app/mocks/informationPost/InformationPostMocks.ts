const urlAdmin = process.env.REACT_APP_SERVER_URL_ADMIN

export const InformationPostMocks: {[key: string]: any} = {
    [`${urlAdmin}/information_posts/:id`]: {
        post: {
            id: 12,
            post_name: 'asd',
            theme_id: 2,
            order: 4,
            message: 'esfdds',
            media_id:'url...',
            content_type_id: 2
        }
    },
    [`${urlAdmin}/information_posts`]: {
        posts: [
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
};