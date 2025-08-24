
const USER = {
    email: "ctop124@mail.ru",
    isAuth: true
}


class UserService{

    async login(email: string, password: string){

        return USER
    }

    async registration(email: string, password: string){
        
        return USER
    }

}

export const userService = new UserService()