import Axios from 'axios'

const PatchUserRequest = ()=> {
    return{
        type: 'PATCHUSER_REQUEST'
    }
}

const PatchUserSuccess = (data)=> {
    return{
        type: 'PATCHUSER_SUCCESS',
        payload: data
    }
}
const PatchUserError = (error)=> {
    return{
        type: 'PATCHUSER_ERROR',
        payload: error
    }
}


export const PatchProfile = (fields) => {
    return (dispatch) =>{
        
        dispatch(PatchUserRequest())
        return Axios({
            method: 'PATCH',
            data: {
                password: fields.password,
                pin: fields.pin
            },
            url:    `/users/${fields.id}`,
            headers: {
                'auth-token': `${fields.token}`
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            dispatch(PatchUserSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(PatchUserError(message))
        })
    }
}
