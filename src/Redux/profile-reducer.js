import { profileAPI } from "../api/api"

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"

let initialState = {
    posts: [
        { message: "Hi, how are you? ", likeCount: "15", id: "1" },
        { message: "It`s my first post", likeCount: "25", id: "2" },
    ],
    newPostText: '',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPost,
                likeCount: "3",
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }

        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state;
    }
}


export const AddPostActionCreator = (newPost) => ({ type: ADD_POST, newPost })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })





export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }

        })

    }

}


export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUser(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export default profileReducer
