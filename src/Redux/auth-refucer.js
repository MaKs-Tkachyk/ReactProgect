import { authAPI } from "../api/api";

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
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}


export const setAuthUsersData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })

export const getAuthUsersData = ()=>{
    return (dispatch)=>{
     
        authAPI.me()
        .then(response => {
            if (response.resultCode === 0) {
                let { id, email, login } = response.data
                dispatch(setAuthUsersData(id, email, login))
            }
        })
    }
}


export default authReducer
