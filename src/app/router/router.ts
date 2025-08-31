import { RouteObject } from "react-router-dom";
import { HOME_ROUTE, LOGIN_ROUTE, USERS_ROUTE } from "./routes";
import App from "../../App";
import AuthPage from "../../pages/auth/AuthPage";
import HomePage from "../../pages/home/HomePage";
import { NotFound } from "../../widgets/notFound";
import UsersPage from "../../pages/users/users";



const Router: RouteObject[] = [
    {
        path: HOME_ROUTE.path,
        Component: App,
        ErrorBoundary: NotFound,
        children: [
            {
                path: HOME_ROUTE.path,
                Component: HomePage
            },
            {
                path: LOGIN_ROUTE.path,
                Component: AuthPage
            },
            {
                path: USERS_ROUTE.path,
                Component: UsersPage
            }
        ]
    }
]


export default Router