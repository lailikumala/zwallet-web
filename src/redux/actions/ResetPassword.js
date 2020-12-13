import Axios from 'axios'

//reset password
const ResetPasswordRequest = ()=> {
    return{
        type: 'RESETPASSWORD_REQUEST'
    }
}

const ResetPasswordSuccess = (data)=> {
    return{
        type: 'RESETPASSWORD_SUCCESS',
        payload: data
    }
}
const ResetPasswordError = (error)=> {
    return{
        type: 'RESETPASSWORD_ERROR',
        payload: error
    }
}


export const ResetPass = (fields) => {
    return (dispatch) =>{
        dispatch(ResetPasswordRequest())
        return Axios({
            method: 'PATCH',
            data: {
                email: fields.email,
                password: fields.password,
            },
            url:    '/auth/reset_password',
            headers: {
                'auth-token': `${fields.token}`
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            dispatch(ResetPasswordSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(ResetPasswordError(message))
        })
    }
}

