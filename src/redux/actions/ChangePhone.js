import Axios from 'axios'
const ChangePhoneRequest = ()=> {
    return{
        type: 'CHANGEPHONE_REQUEST'
    }
}

const ChangePhoneSuccess = (data)=> {
    return{
        type: 'CHANGEPHONE_SUCCESS',
        payload: data
    }
}
const ChangePhoneError = (error)=> {
    return{
        type: 'CHANGEPHONE_ERROR',
        payload: error
    }
}

export const PatchPhone = (fields) => {
    return (dispatch) =>{
        dispatch(ChangePhoneRequest())
        return Axios({
            method: 'PATCH',
            data: {
                phone: fields.phone
            },
            url:    `/change_phone/${fields.id}`,
            headers: {
                'auth-token': `${fields.token}`
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            dispatch(ChangePhoneSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(ChangePhoneError(message))
        })
    }
}

