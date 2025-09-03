import { bindActionCreators } from "@reduxjs/toolkit"
import { useAppDispatch } from "../../../../app/store/store"
import { ScenarioSlice } from "../../model/reducers/ScenarioSlice"




export const useScenarioActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(ScenarioSlice.actions, dispatch)
}