import Axios from 'axios'
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

