import { RouteObject } from "react-router-dom";
import { HOME_ROUTE, LOGIN_ROUTE } from "./routes";
import App from "../../App";
import AuthPage from "../../pages/auth/AuthPage";
import HomePage from "../../pages/home/HomePage";



const Router: RouteObject[] = [
    {
        path: HOME_ROUTE.path,
        Component: App,
        children: [
            {
                path: HOME_ROUTE.path,
                Component: HomePage
            },
            {
                path: LOGIN_ROUTE.path,
                Component: AuthPage
            },
        ]
    }
]


export default Router