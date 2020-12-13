import Axios from 'axios'

const AuthLoginRequest = ()=> {
    return{
        type: 'LOGIN_REQUEST'
    }
}

const AuthLoginSuccess = (data)=> {
    return{
        type: 'LOGIN_SUCCESS',
        payload: data
    }
}
const AuthLoginError = (error)=> {
    return{
        type: 'LOGIN_ERROR',
        payload: error
    }
}

const AuthSignUpRequest = ()=> {
    return{
        type: 'SIGNUP_REQUEST'
    }
}

const AuthSignUpSuccess = (data)=> {
    return{
        type: 'SIGNUP_SUCCESS',
        payload: data
    }
}
const AuthSignUpError = (error)=> {
    return{
        type: 'SIGNUP_ERROR',
        payload: error
    }
}



export const AuthLogin = (fields) => {
    return (dispatch) =>{
        dispatch(AuthLoginRequest())
        return Axios({
            method: 'POST',
            data: fields,
            url: '/auth/login'
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dataas')
            dispatch(AuthLoginSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(AuthLoginError(message))
        })
    }
}

export const AuthSignUp = (fields) => {
    return (dispatch) =>{
        dispatch(AuthSignUpRequest())
        return Axios({
            method: 'POST',
            data: fields,
            url: '/auth/signup'
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dataas')
            dispatch(AuthSignUpSuccess(data))
            dispatch(AuthLogout())
        }).catch((err)=> {
            const message = err.message
            dispatch(AuthSignUpError(message))
        })
    }
}


export const AuthLogout = ()=> {
    return{
        type: 'LOGOUT',
    }
}
