import { combineReducers } from 'redux'
import Auth from './Auth'
import ResetPassword from './ResetPassword'
import User from './Users'
import Transfer from './Transfer'
import Topup from './Topup'
import PatchUser from './PatchUser'
import ChangePin from './ChangePin'
import ChangePhone from './ChangePhone'
import ChangePhoto from './ChangePhoto'



const reducers = combineReducers({
    Auth,
    ResetPassword,
    User,
    Transfer,
    Topup,
    PatchUser,
    ChangePin,
    ChangePhone,
    ChangePhoto
    
})

export default reducers