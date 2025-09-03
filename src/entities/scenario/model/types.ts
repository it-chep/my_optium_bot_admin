


export interface IScenario {
    id: number;
    name: string;
    delay: number;
}

export interface IScenarioStep {
    id: number;
    scenario_name: string;
    step_order: number;
    text: string;
}

export interface IScenarioStepData {
    id: number;
    scenario_name: string;
    text: string;
}

export interface IScenarioStepDataInitialState {
    scenarioStepData: IScenarioStepData;
    isLoading: boolean;
    error: string;
}