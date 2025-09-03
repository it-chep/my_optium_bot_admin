import { bindActionCreators } from "@reduxjs/toolkit"
import { useAppDispatch } from "../../../../app/store/store"
import { InformationPostSlice } from "../../model/reducers/InformationPostSlice"





export const useInformationPostActions = () =>{
    const dispatch = useAppDispatch()
    return bindActionCreators(InformationPostSlice.actions, dispatch)
}