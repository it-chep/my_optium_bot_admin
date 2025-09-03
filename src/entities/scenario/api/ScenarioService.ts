import { fetchAuth } from "../../../shared/api/ApiService"
import { IScenario, IScenarioStep } from "../model/types"


class ScenarioService {

    async updateStep(id: number, message: string){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/steps/' + id, {
            method: "POST",
            body: JSON.stringify({message})
        })
    }

    async update(id: number, delay: string){
        await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/scenarios/' + id, {
            method: "POST",
            body: JSON.stringify({delay})
        })
    }
        
    async getScenarios(){
        // const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/scenarios')
        // const {scenarios}: {scenarios: IScenario[]} = await res.json()

        return [
          {
      "id": 3,
      "name": "",
      "delay": "1s"
    },
    {
      "id": 4,
      "name": "Терапия",
      "delay": "0s"
    },
    {
      "id": 5,
      "name": "Обучение",
      "delay": "23s"
    },
    {
      "id": 6,
      "name": "Рекомендации",
      "delay": "4m"
    },
    {
      "id": 7,
      "name": "",
      "delay": "12s"
    },
    {
      "id": 8,
      "name": "Информация",
      "delay": "3s"
    },
    {
      "id": 9,
      "name": "Потеряшка",
      "delay": "1 second, 1 minute, 1 hour"
    },
    {
      "id": 10,
      "name": "Выведение на контроль",
      "delay": "1s"
    },
    {
      "id": 11,
      "name": "",
      "delay": "1s"
    },
    {
      "id": 1,
      "name": "Инит бота",
      "delay": "10000000000s"
    },
    {
      "id": 2,
      "name": "Метрики",
      "delay": "10000000000s"
    }
        ]
    }
        
    async getSteps(): Promise<IScenarioStep[]>{
        // const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/steps')
        // const {steps}: {steps: IScenarioStep[]} = await res.json()
        

        return [
    {
      "id": 2,
      "scenario_name": "Инит бота",
      "step_order": 2,
      "text": "Укажите пол"
    },
    {
      "id": 34,
      "scenario_name": "Потеряшка",
      "step_order": 11,
      "text": "Понимаю 😞😞😞\n\nТакое сейчас время. Но помните, занимаясь здоровьем, вы не отнимаете у себя время, а наоборот, получаете больше времени за счет энергии и продуктивности!\n\nБудет посвободнее - пишите! Продолжим!"
    },
    {
      "id": 35,
      "scenario_name": "Потеряшка",
      "step_order": 12,
      "text": "Понимаю 😞\n\nЦены сейчас на медицину дорогие. Если что, можете с врачом обсудить бюджет, думаю можно оставить только ключевые вещи."
    },
    {
      "id": 36,
      "scenario_name": "Потеряшка",
      "step_order": 13,
      "text": "Понял. Такое бывает в начале терапии, однако все можно отрегулировать с врачом.\n\nЯ сообщу ему об этом и вы сможете обсудить."
    },
    {
      "id": 37,
      "scenario_name": "Потеряшка",
      "step_order": 14,
      "text": "Понял. Очень редко, но такое бывает.\n\nТут важно в таких случаях разобраться - для этого мы собираем консилиум с главным врачом и другими врачами и они смотрят вашу историю и дадут рекомендации.\n\nБезусловно это будет бесплатно!\n\nЯ сообщу вашему врачу, он напишет вам."
    },
    {
      "id": 38,
      "scenario_name": "Потеряшка",
      "step_order": 15,
      "text": "Опишите, пожалуйста, причину"
    },
    {
      "id": 39,
      "scenario_name": "Потеряшка",
      "step_order": 16,
      "text": "Спасибо за ответ! Мы его проанализируем!"
    },
    {
      "id": 40,
      "scenario_name": "Выведение на контроль",
      "step_order": 1,
      "text": "Здравствуйте, {{.FirstName}}👋"
    },
    {
      "id": 41,
      "scenario_name": "Выведение на контроль",
      "step_order": 2,
      "text": "Подошло время сдачи контрольных анализов. Когда вам было бы удобно? Подумайте и сообщите, пожалуйста, врачу😊\n\nНапомню, очень важно оценить изменения, чтобы закрепить и улучшить результат!\n\nОбъем обследования, добавление новых анализов и направлений работы вы можете обсудить с вашим врачом."
    },
    {
      "id": 42,
      "scenario_name": "Выведение на контроль",
      "step_order": 3,
      "text": "Заполните ещё, пожалуйста, метрики сегодня. Врачу важно видеть их, чтобы оценить динамику и понять  на что сделать акцент, какие анализы проконтролировать."
    },
    {
      "id": 43,
      "scenario_name": "Выведение на контроль",
      "step_order": 4,
      "text": "Далее будьте на связи с врачом! Хорошего дня! 🤗"
    },
    {
      "id": 44,
      "scenario_name": "Выведение на контроль",
      "step_order": 5,
      "text": "Здравствуйте, {{.FirstName}}👋\n\nУдалось согласовать с врачом контрольные анализы и примерную дату сдачи анализов?"
    },
    {
      "id": 45,
      "scenario_name": "Выведение на контроль",
      "step_order": 6,
      "text": "Прекрасно 🎉 Ассистенты помогут организовать весь процесс!\n\nНа связи!"
    },
    {
      "id": 46,
      "scenario_name": "Выведение на контроль",
      "step_order": 7,
      "text": "Здравствуйте, {{.FirstName}}👋"
    },
    {
      "id": 47,
      "scenario_name": "Выведение на контроль",
      "step_order": 8,
      "text": "Скажите, пожалуйста, вы уже сдали анализы?"
    },
    {
      "id": 48,
      "scenario_name": "Выведение на контроль",
      "step_order": 9,
      "text": "Отлично! Ассистенты следят за готовностью анализов. Когда все анализы будут готовы, запишут вас на консультацию на удобное время.\n\nАх да, вам будут постепенно приходить готовые результаты анализов на почту, но это еще не означает, что готовы все. Ждем полной готовности.\n\nХорошего дня!"
    },
    {
      "id": 49,
      "scenario_name": "Выведение на контроль",
      "step_order": 10,
      "text": "Хорошо, понял вас😊\n\nЕсли что, пишите, ассистенты вам помогут."
    },
    {
      "id": 50,
      "scenario_name": "Выведение на контроль",
      "step_order": 11,
      "text": "Хорошо, отметил у себя. Позже спрошу у вас."
    },
        ]
    }

}

export const scenarioService = new ScenarioService()