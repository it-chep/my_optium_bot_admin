import { RouteObject } from "react-router-dom";
import { HOME_ROUTE, INFORMATION_POST_CREATE_ROUTE, INFORMATION_POST_UPDATE_ROUTE, INFORMATION_POSTS_ROUTE, LIST_CREATE_ROUTE, LIST_UPDATE_ROUTE, LISTS_ROUTE, LOGIN_ROUTE, NEWSLETTER_CREATE_ROUTE, NEWSLETTER_UPDATE_ROUTE, NEWSLETTERS_ROUTE, POSTS_THEMES_ROUTE, USERS_ROUTE } from "./routes";
import App from "../../App";
import AuthPage from "../../pages/auth/AuthPage";
import HomePage from "../../pages/home/HomePage";
import { NotFound } from "../../widgets/notFound";
import UsersPage from "../../pages/users/Users";
import NewslettersPage from "../../pages/newsletters/NewslettersPage";
import NewsletterChangePage from "../../pages/newsletterChangePage/NewsletterChangePage";
import ListsPage from "../../pages/lists/Lists";
import ListChangePage from "../../pages/listChange/ListChangePage";
import InformationPostsPage from "../../pages/informationPosts/InformationPosts";
import PostsThemesPage from "../../pages/postsThemes/PostsThemes";



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
            },
            {
                path: LIST_CREATE_ROUTE.path,
                Component: ListChangePage
            },
            {
                path: LIST_UPDATE_ROUTE.path,
                Component: ListChangePage
            },
            {
                path: INFORMATION_POSTS_ROUTE.path,
                Component: InformationPostsPage
            },
            // {
            //     path: INFORMATION_POST_CREATE_ROUTE.path,
            //     Component: ListChangePage
            // },
            // {
            //     path: INFORMATION_POST_UPDATE_ROUTE.path,
            //     Component: ListChangePage
            // },
            {
                path: POSTS_THEMES_ROUTE.path,
                Component: PostsThemesPage
            },
        ]
    }
]


export default Router