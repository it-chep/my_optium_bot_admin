const urlAdmin = process.env.REACT_APP_SERVER_URL_ADMIN


export const UserMocks: {[key: string]: any} = {
    [`${urlAdmin}/users/:id`]: {
        "user": {
            "id": 1,
            "name": "Нечебурек Максим",
            "sex": "М",
            "tg_id": 7618355725,
            "metrics_link": "https://music.yandex.ru/artist/17760331",
            "birthday": "2004-05-11"
        },
        "lists": [],
        "posts": [],
        "scenarios": []
    },
    [`${urlAdmin}/users`]: {
        users: [
            {
                "id": 1,
                "name": "Нечепорук Максим Алексеевич",
                "sex": "М",
                "tg_id": 123,
                "metrics_link": "https://music.yandex.ru/album/37514534",
                "birthday": "2004-05-11"
            }
        ]
    }
};