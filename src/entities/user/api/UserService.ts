import { fetchAuth } from "../../../shared/api/ApiService"
import { hashSync } from "bcrypt-ts";



class UserService{

    async login(email: string, password: string): Promise<void> {
        const hashEmail = hashSync(email, 10)
        const hashPassword = hashSync(password, 10)
        const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/login', {
            method: "POST",
            body: JSON.stringify({email: hashEmail, password: hashPassword})
        })
        const {token} : {token: string} = await res.json()
        localStorage.setItem('auth_token', token)
    }
    
    async check(): Promise<void>{
        const res = await fetchAuth(process.env.REACT_APP_SERVER_URL_ADMIN + '/check-token')
    }

}

export const userService = new UserService()