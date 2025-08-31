import { IRoute } from "./types";



export const HOME_ROUTE: IRoute = {
    name: 'Главная',
    path: '/',
}

export const LOGIN_ROUTE: IRoute = {
    name: 'Вход',
    path: '/login'
}

export const USERS_ROUTE: IRoute = {
    name: 'Пользователи',
    path: '/users'
}

export const NEWSLETTERS_ROUTE: IRoute = {
    name: 'Рассылки',
    path: '/newsletters'
}

export const USER_LIST_ROUTE: IRoute = {
    name: 'Списки рассылок',
    path: '/user_list'
}