const urlAdmin = process.env.REACT_APP_SERVER_URL_ADMIN

export const ListMocks: {[key: string]: any} = {
    [`${urlAdmin}/users-lists`]: {
        lists: [
            {
                "id": 6,
                "name": "Список крутых",
                "users_count": 0
            },
            {
                "id": 3,
                "name": "Новички",
                "users_count": 2
            },
            {
                "id": 5,
                "name": "Автобусу",
                "users_count": 0
            },
            {
                "id": 4,
                "name": "Фреш ",
                "users_count": 0
            },
            {
                "id": 2,
                "name": "Лаг 2",
                "users_count": 2
            }
        ]
    }
};