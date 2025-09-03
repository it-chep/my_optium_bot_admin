import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScenarioInitialState } from "./initialState";
import { IScenario } from "../types";


export const ScenarioSlice = createSlice({
    name: 'scenario',
    initialState: ScenarioInitialState,
    reducers: {
        setDelay(state, action: PayloadAction<string>){
            state.scenario.delay = action.payload;
        },
        setScenario(state, action: PayloadAction<IScenario>){
            state.scenario = action.payload;
        },
    }
})

export default ScenarioSlice.reducer