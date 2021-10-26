

let store = {
    _state : {
    profilePage: {
        posts: [
            { message: "Hi, how are you? ", likeCount: "15", id: "1" },
            { message: "It`s my first post", likeCount: "25", id: "2" },
        ],
        newPostText: ''
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
        newDialogsText: '',
    }
},
getState(){
    return this._state
},
 _callSubscriber () {
  
},
addPost() {
    let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: "3",
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ""
    this._callSubscriber(this._state)
},
updateNewPostText  (newText)  {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
},
addDialog () {
    let newDialog = {
        id: 5,
        message: this._state.dialogsPage.newDialogsText,
    }
    this._state.dialogsPage.messages.push(newDialog)
    this._state.dialogsPage.newDialogsText = ""
    this._callSubscriber(this._state)
},

updateNewDialogText  (newText) {
    this._state.dialogsPage.newDialogsText = newText
    this._callSubscriber(this._state)
},
subscribe(observer){
    this._callSubscriber = observer
}
}














export default store