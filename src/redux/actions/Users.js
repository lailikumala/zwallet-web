import Axios from 'axios'

// by id
const UserRequest = ()=> {
    return{
        type: 'USER_REQUEST'
    }
}

const UserSuccess = (data)=> {
    return{
        type: 'USER_SUCCESS',
        payload: data
    }
}
const UserError = (error)=> {
    return{
        type: 'USER_ERROR',
        payload: error
    }
}

export const GetUser = (fields) => {
    return (dispatch) =>{
        dispatch(UserRequest())
        return Axios({
            method: 'GET',
            url:    `/users/${fields.id}`,
            headers: {
                'auth-token': `${fields.token}`
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            
            dispatch(UserSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(UserError(message))
        })
    }
}


const ChangePhotoRequest = ()=> {
    return{
        type: 'CHANGEPHOTO_REQUEST'
    }
}

const ChangePhotoSuccess = (data)=> {
    return{
        type: 'CHANGEPHOTO_SUCCESS',
        payload: data
    }
}
const ChangePhotoError = (error)=> {
    return{
        type: 'CHANGEPHOTO_ERROR',
        payload: error
    }
}

export const PatchPhoto = (fields) => {
    return (dispatch) =>{
        dispatch(ChangePhotoRequest())
        return Axios({
            method: 'PATCH',
            data: {
                photo: fields.photo
            },
            url:    `/change_photo/${fields.id}`,
            headers: {
                'auth-token': `${fields.token}`,
                'Content-Type': 'multipart/form-data',
                
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            dispatch(ChangePhotoSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(ChangePhotoError(message))
        })
    }
      
}


