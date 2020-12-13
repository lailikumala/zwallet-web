import Axios from "axios"

const TOKEN_KEY = 'jwt'

export const login = () => {
    
    localStorage.setItem(TOKEN_KEY, 'Eykuadkdakdk281368124')
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
}


export const isLogin = ()=> {
    if(localStorage.getItem(TOKEN_KEY)) {
        return true
    }
    return false
}