import Axios from 'axios'

const TransferRequest = ()=> {
    return{
        type: 'TRANSFER_REQUEST'
    }
}

const TransferSuccess = (data)=> {
    return{
        type: 'TRANSFER_SUCCESS',
        payload: data
    }
}
const TransferError = (error)=> {
    return{
        type: 'TRANSFER_ERROR',
        payload: error
    }
}


export const DataTansfer = (fields) => {
    return (dispatch) =>{
        dispatch(TransferRequest())
        return Axios({
            method: 'GET',
            url: `/users/search?name=${fields.name}&sortBy=name&sortType=ASC`,
            headers: {
                'auth-token': `${fields.token}`
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            dispatch(TransferSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(TransferError(message))
        })
    }
}



