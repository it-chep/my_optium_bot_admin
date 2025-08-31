import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {myReducer} from "../../entities/my";
import {globalMessageReducer} from "../../entities/globalMessage"


const store = configureStore({
    reducer: {
        myReducer,
        globalMessageReducer
    }
})


type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store
