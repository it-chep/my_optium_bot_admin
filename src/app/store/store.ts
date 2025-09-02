import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {myReducer} from "../../entities/my";
import {globalMessageReducer} from "../../entities/globalMessage"
import {globalLoadingReducer} from "../../entities/globalLoading"
import {newsletterReducer} from "../../entities/newsletters"
import {listReducer} from "../../entities/list"


const store = configureStore({
    reducer: {
        myReducer,
        globalMessageReducer,
        globalLoadingReducer,
        newsletterReducer,
        listReducer,
    }
})


type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store
