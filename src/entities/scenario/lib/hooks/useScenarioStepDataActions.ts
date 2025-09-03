import { bindActionCreators } from "@reduxjs/toolkit"
import { useAppDispatch } from "../../../../app/store/store"
import { ScenarioStepSlice } from "../../model/reducers/ScenarioStepSlice"




export const useScenarioStepDataActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(ScenarioStepSlice.actions, dispatch)
}