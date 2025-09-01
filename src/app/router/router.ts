import { RouteObject } from "react-router-dom";
import { HOME_ROUTE, LISTS_ROUTE, LOGIN_ROUTE, NEWSLETTER_CREATE_ROUTE, NEWSLETTER_UPDATE_ROUTE, NEWSLETTERS_ROUTE, USERS_ROUTE } from "./routes";
import App from "../../App";
import AuthPage from "../../pages/auth/AuthPage";
import HomePage from "../../pages/home/HomePage";
import { NotFound } from "../../widgets/notFound";
import UsersPage from "../../pages/users/Users";
import NewslettersPage from "../../pages/newsletters/NewslettersPage";
import NewsletterChangePage from "../../pages/newsletterChangePage/NewsletterChangePage";
import ListsPage from "../../pages/lists/Lists";



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
            },
            {
                path: NEWSLETTERS_ROUTE.path,
                Component: NewslettersPage
            },
            {
                path: NEWSLETTER_CREATE_ROUTE.path,
                Component: NewsletterChangePage
            },
            {
                path: NEWSLETTER_UPDATE_ROUTE.path,
                Component: NewsletterChangePage
            },
            {
                path: LISTS_ROUTE.path,
                Component: ListsPage
            }
        ]
    }
]


export default Router