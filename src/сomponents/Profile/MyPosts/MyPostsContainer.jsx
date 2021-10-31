
import React from "react"
import { AddPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/profile-reducer"
import MyPosts from "./MyPosts"




const MyPostsContainer = (props) => {
console.log(props)
    let state = props.store.getState().profilePage

    let AddPost = () => {
        props.store.dispatch(AddPostActionCreator())
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (

        <MyPosts updateNewPostText={onPostChange}
            AddPost={AddPost}
            posts={state.posts}
            newPostText={state.newPostText}
        />


    )
}

export default MyPostsContainer