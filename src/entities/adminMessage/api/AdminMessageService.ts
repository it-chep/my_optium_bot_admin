import { fetchAuth } from "../../../shared/api/ApiService"
import { ISection } from "../../../widgets/nav/model/types"
import { IAdminMessage, IAdminMessageData } from "../model/types"


class AdminMessageService{

    async create(adminMessages: IAdminMessageData){
       await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/messages/', {
            method: "POST",
            body: JSON.stringify({...adminMessages})
        })
    }

    async delete(id: number){
        // await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/messages/' + id, {
        //     method: "DELETE"
        // })
    }

    async getAll(): Promise<IAdminMessage[]>{
        // const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/messages')
        // const {messages}: {messages: IAdminMessage[]} = await res.json()

        return [
            {
                "id": 2,
                "scenario_name": "Выведение на контроль",
                "type": 0,
                "type_name": "Админам",
                "text": "❗️На контроль готов {{.FullName}}, {{date_format .BirthDate}}"
            },
            {
                "id": 3,
                "scenario_name": "Инит бота",
                "type": 0,
                "type_name": "Админам",
                "text": "Привет это системное оповещение"
            },
            {
                "id": 2,
                "scenario_name": "Терапия",
                "type": 1,
                "type_name": "Доктору",
                "text": "🔥Реакция на терапию у пациента {{.FullName}}, {{date_format .BirthDate}}"
            },
            {
                "id": 3,
                "scenario_name": "Метрики",
                "type": 1,
                "type_name": "Доктору",
                "text": "📈 Метрики заполнены ({{.FullName}}, {{date_format .BirthDate}}). Посмотрите, пожалуйста - {{.MetricsLink}}.\n\nКратность метрик можно изменить в админке"
            },
            {
                "id": 4,
                "scenario_name": "Выведение на контроль",
                "type": 1,
                "type_name": "Доктору",
                "text": "❗️На контроль {{.FullName}}, {{date_format .BirthDate}}"
            },
            {
                "id": 5,
                "scenario_name": "Выведение на контроль",
                "type": 1,
                "type_name": "Доктору",
                "text": "❗️Пациент {{.FullName}}, {{date_format .BirthDate}} отменяет контроль, проверьте причину в чате"
            },
            {
                "id": 6,
                "scenario_name": "Инит бота",
                "type": 1,
                "type_name": "Доктору",
                "text": "Привет это системное оповещение у доктора"
            }
        ]
    }

    async getScenarios(){
        // const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/scenarios')
        // const {scenarios}: {scenarios: ISection[]} = await res.json()

        return [
    {
      "id": 3,
      "name": "",
      "delay": 0
    },
    {
      "id": 4,
      "name": "Терапия",
      "delay": 0
    },
    {
      "id": 5,
      "name": "Обучение",
      "delay": 0
    },
    {
      "id": 6,
      "name": "Рекомендации",
      "delay": 0
    },
    {
      "id": 7,
      "name": "",
      "delay": 0
    },
    {
      "id": 8,
      "name": "Информация",
      "delay": 0
    },
    {
      "id": 9,
      "name": "Потеряшка",
      "delay": 0
    },
    {
      "id": 10,
      "name": "Выведение на контроль",
      "delay": 0
    },
    {
      "id": 11,
      "name": "",
      "delay": 0
    },
    {
      "id": 1,
      "name": "Инит бота",
      "delay": 10000000000
    },
    {
      "id": 2,
      "name": "Метрики",
      "delay": 10000000000
    }
        ]
    }
}

export const adminMessageService = new AdminMessageService()