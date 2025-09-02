import { bindActionCreators } from "@reduxjs/toolkit"
import { useAppDispatch } from "../../../../app/store/store"
import { ListSlice } from "../../model/reducers/ListSlice"



export const useListActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(ListSlice.actions, dispatch)
}