import { bindActionCreators } from "@reduxjs/toolkit"
import { useAppDispatch } from "../../../../app/store/store"
import { NewsletterSlice } from "../../model/reducers/NewsletterSlice"



export const useNewsletterActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(NewsletterSlice.actions, dispatch)
}