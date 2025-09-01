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

export const NEWSLETTER_CREATE_ROUTE: IRoute = {
    name: 'Создание рассылки',
    path: '/newsletter/create'
}

export const NEWSLETTER_UPDATE_ROUTE: IRoute = {
    name: 'Редактирование рассылки',
    path: '/newsletter/update'
}

export const USER_LIST_ROUTE: IRoute = {
    name: 'Списки рассылок',
    path: '/user_list'
}