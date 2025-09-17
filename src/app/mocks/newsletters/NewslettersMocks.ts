const urlAdmin = process.env.REACT_APP_SERVER_URL_ADMIN

export const NewslettersMocks: {[key: string]: any} = {
   [`${urlAdmin}/newsletters/:id`]: {
        data: {
            "id": 1,
            "name": "Первая",
            "text": 'aaaaaaaaa',
            "users_lists": [1, 3],
            "media_id": 'url...',
            "content_type_id": 2
        }
    },
    [`${urlAdmin}/recepients_count`]: {
        count: 1234
    },
    [`${urlAdmin}/content_types`]: {
        content_types: [
            {
                id: 1,
                name: 'фото'
            },
            {
                id: 2,
                name: 'видео'
            }
        ]
    },
    [`${urlAdmin}/newsletters`]: {
        newsletters:  [
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
};