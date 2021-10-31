import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"


let store = {
    _state: {
        profilePage: {
            posts: [
                { message: "Hi, how are you? ", likeCount: "15", id: "1" },
                { message: "It`s my first post", likeCount: "25", id: "2" },
            ],
            newPostText: '',

        },
        dialogsPage: {
            messages: [
                { message: "Hi ", id: "1" },
                { message: "How are you ", id: "2" },
                { message: "I`m fine ", id: "3" },
                { message: "And you ", id: "4" },
            ],
            dialogs: [
                { name: "Andrey ", id: "1" },
                { name: "Max ", id: "2" },
                { name: "Sergiy ", id: "3" },
                { name: "Bogdan ", id: "4" },
            ],
            newDialogsText: "",
        },
        sideBar: {}
    },
    _callSubscriber() {
        /*render*/
        console.log("1")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)
        this._callSubscriber(this._state)
    }
}






export default store