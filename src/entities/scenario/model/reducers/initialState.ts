import { IScenarioInitialState, IScenarioStepDataInitialState } from "../types";


export const ScenarioStepDataInitialState: IScenarioStepDataInitialState = {
    scenarioStepData: {
        id: -1,
        scenario_name: '',
        text: '',
    },
    isLoading: false,
    error: '',
}

export const ScenarioInitialState: IScenarioInitialState = {
    scenario: {
        id: -1,
        name: '',
        delay: 0,
    },
    isLoading: false,
    error: '',
}