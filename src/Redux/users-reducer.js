import { usersAPI } from "../api/api"

const FOLLOW = "FOLLOW"
const UN_FOLLOW = "UN-FOLLOW"
const SET_USERS = " SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT"
const TOGGLE_IS_SWITCHING = "TOGGLE-IS-SWITCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS"


let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 20,
    currentPage: 1,
    isSwitching: true,
    followingInProgress: []
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
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isSwitching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        }
        default:
            return state;
    }
}


export const followSuccsess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccsess = (userId) => ({ type: UN_FOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalCount = (totalUserCount) => ({ type: SET_TOTAL_COUNT, totalUserCount })
export const toggleSwitching = (isSwitching) => ({ type: TOGGLE_IS_SWITCHING, isSwitching })
export const toggleFollowingProgress = (isSwitching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isSwitching, userId })

export const getUsers = (currentPage, pageNumber) => {
    return (dispatch) => {
        dispatch(toggleSwitching(true))
        usersAPI.getUsers(currentPage, pageNumber).then(data => {
            dispatch(toggleSwitching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
        })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccsess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccsess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}



export default usersReducer
