const urlAdmin = process.env.REACT_APP_SERVER_URL_ADMIN

export const PostMocks: {[key: string]: any} = {
    [`${urlAdmin}/posts_themes`]: {
        themes:  [
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
};