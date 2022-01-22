import { async } from '@firebase/util'
import axios from 'axios'
import { auth, app, provider, googlePopup } from '../firebase'
//data inicial
const dataInicial = {
    loading: false,
    active: false,
}

//types
const LOADING = 'LOADING'
const USER_ERROR = 'USER_ERROR'
const USER_SUCCESS = 'USER_SUCCESS'
const USER_LOGOUT = 'USER_LOGOUT'


//reducer 
export default function userReducer (state = dataInicial, action) {
    switch (action.type) {
        case LOADING:
            return {...state, loading: true}
        case USER_ERROR:
            return {...dataInicial}
        case USER_SUCCESS:
            return {...state, loading: false, user: action.payload, active: true}
        case USER_LOGOUT:
            return {...dataInicial}
        default:
            return {...state}
    }
}

//acciones
export const userLoginAction = () => async (dispatch) => {

    dispatch({
        type: LOADING
    })

    try {
        const res = await googlePopup(auth, provider)
        dispatch({
            type: USER_SUCCESS,
            payload: {
                uid: res.user.uid,
                email: res.user.email
            }
        })

        localStorage.setItem('user', JSON.stringify({
            uid: res.user.uid,
            email: res.user.email
        }))
        
    } catch (error) {
        console.log(error);
        dispatch({
            type: USER_ERROR
        })
    }
}

export const readUserAction = () => async (dispatch) => {
    if(localStorage.getItem('user')) {
        dispatch({
            type: USER_SUCCESS,
            payload: JSON.parse(localStorage.getItem('user'))
        })
    }

}
export const userLogoutAction = () => async (dispatch) => {
    auth.signOut()
    localStorage.removeItem('user')
    dispatch({
        type: USER_LOGOUT
    })
}