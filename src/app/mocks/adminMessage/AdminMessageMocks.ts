const urlAdmin = process.env.REACT_APP_SERVER_URL_ADMIN

export const AdminMessageMocks: {[key: string]: any} = {
    [`${urlAdmin}/messages`]: {
        messages: [
            {
                step_order: 12,
                "id": 2,
                "scenario_name": "Выведение на контроль",
                "type": 0,
                "type_name": "Админам",
                "text": "❗️На контроль готов {{.FullName}}, {{date_format .BirthDate}}"
            },
            {
                step_order: 12,
                "id": 3,
                "scenario_name": "Инит бота",
                "type": 0,
                "type_name": "Админам",
                "text": "Привет это системное оповещение"
            },
            {
                step_order: 12,
                "id": 4,
                "scenario_name": "Терапия",
                "type": 1,
                "type_name": "Доктору",
                "text": "🔥Реакция на терапию у пациента {{.FullName}}, {{date_format .BirthDate}}"
            },
            {
                step_order: 12,
                "id": 5,
                "scenario_name": "Метрики",
                "type": 1,
                "type_name": "Доктору",
                "text": "📈 Метрики заполнены ({{.FullName}}, {{date_format .BirthDate}}). Посмотрите, пожалуйста - {{.MetricsLink}}.\n\nКратность метрик можно изменить в админке"
            },
            {
                step_order: 12,
                "id": 6,
                "scenario_name": "Выведение на контроль",
                "type": 1,
                "type_name": "Доктору",
                "text": "❗️На контроль {{.FullName}}, {{date_format .BirthDate}}"
            },
            {
                step_order: 12,
                "id": 7,
                "scenario_name": "Выведение на контроль",
                "type": 1,
                "type_name": "Доктору",
                "text": "❗️Пациент {{.FullName}}, {{date_format .BirthDate}} отменяет контроль, проверьте причину в чате"
            },
            {
                step_order: 12,
                "id": 8,
                "scenario_name": "Инит бота",
                "type": 1,
                "type_name": "Доктору",
                "text": "Привет это системное оповещение у доктора"
            }
        ]
    }
};