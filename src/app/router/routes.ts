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

export const LISTS_ROUTE: IRoute = {
    name: 'Списки рассылок',
    path: '/lists'
}

export const LIST_CREATE_ROUTE: IRoute = {
    name: 'Создание списка рассылок',
    path: '/list/create'
}

export const LIST_UPDATE_ROUTE: IRoute = {
    name: 'Редактирование списка рассылок',
    path: '/list/update'
}

export const INFORMATION_POSTS_ROUTE: IRoute = {
    name: 'Информационные посты',
    path: '/information_posts'
}

export const INFORMATION_POST_CREATE_ROUTE: IRoute = {
    name: 'Создание информационного поста',
    path: '/information_post/create'
}

export const INFORMATION_POST_UPDATE_ROUTE: IRoute = {
    name: 'Обновление информационного поста',
    path: '/information_post/update'
}