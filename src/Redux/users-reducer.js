const FOLLOW = "FOLLOW"
const UN_FOLLOW = "UN-FOLLOW"
const SET_USERS = " SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT"
const TOGGLE_IS_SWITCHING = "TOGGLE-IS-SWITCHING"



let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 20,
    currentPage: 1,
    isSwitching: true
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return ({ ...u, followed: true })
                    }
                    return u
                })
            }

        }
        case UN_FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return ({ ...u, followed: false })
                    }
                    return u
                })
            }

        }

        case SET_USERS: {
            //     return { ...state,users: [ ...state.users, ...action.users] }
            return { ...state, users: [...action.users] }

        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }

        }
        case SET_TOTAL_COUNT: {
            return { ...state, totalUserCount: action.totalUserCount }

        }
        case TOGGLE_IS_SWITCHING: {
            return { ...state, isSwitching: action.isSwitching }

        }
        default:
            return state;
    }
}


export const follow = (userId) => ({ type: FOLLOW, userId })
export const unFollow = (userId) => ({ type: UN_FOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalCount = (totalUserCount) => ({ type: SET_TOTAL_COUNT, totalUserCount })
export const toggleSwitching = (isSwitching) => ({ type: TOGGLE_IS_SWITCHING, isSwitching })



export default usersReducer
