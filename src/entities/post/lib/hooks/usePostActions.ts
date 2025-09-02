import { bindActionCreators } from "@reduxjs/toolkit"
import { useAppDispatch } from "../../../../app/store/store"
import { PostSlice } from "../../model/reducers/PostSlice"



export const usePostActions = () => {
    const dispath = useAppDispatch()
    return bindActionCreators(PostSlice.actions, dispath)
}