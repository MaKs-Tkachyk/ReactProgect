import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form';
const SET_USER_DATA = "SET-USER-DATA"



let initialState = {
    userId: null,
    email: null,
    login: null,
    isSwitching: true,
    isAuth: false

}
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {

            return {
                ...state,
                ...action.payLoad,
            }
        }
        default:
            return state;
    }
}


export const setAuthUsersData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payLoad: { userId, email, login, isAuth } })

export const getAuthUsersData = () => {
    return (dispatch) => {

        authAPI.me()
            .then(response => {
                if (response.resultCode === 0) {
                    let { id, email, login } = response.data
                    dispatch(setAuthUsersData(id, email, login, true))
                }
            })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {

        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUsersData())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
                    dispatch(stopSubmit("login", { email: " ", password:message  }))
                }
            })
    }
}

export const loginOut = () => {
    return (dispatch) => {
        authAPI.loginOut()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUsersData(null, null, null, false))
                }
            })
    }
}

export default authReducer
