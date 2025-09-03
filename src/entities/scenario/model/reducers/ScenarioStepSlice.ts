import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScenarioStepDataInitialState } from "./initialState";
import { IScenarioStepData } from "../types";





export const ScenarioStepSlice = createSlice({
    name: 'scenarioStep',
    initialState: ScenarioStepDataInitialState,
    reducers: {
        setText(state, action: PayloadAction<string>){
            state.scenarioStepData.text = action.payload;
        },
        setScenarioStepData(state, action: PayloadAction<IScenarioStepData>){
            state.scenarioStepData = action.payload;
        },
    }
})

export default ScenarioStepSlice.reducer