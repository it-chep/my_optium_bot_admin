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
        const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/scenarios')
        const {scenarios}: {scenarios: IScenario[]} = await res.json()
        return scenarios
    }
        
    async getSteps(): Promise<IScenarioStep[]>{
        const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/steps')
        const {steps}: {steps: IScenarioStep[]} = await res.json()
        return steps
    }

}

export const scenarioService = new ScenarioService()