import { connect } from "react-redux"
import { AddPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/profile-reducer"
import MyPosts from "./MyPosts"




// const MyPostsContainer = (props) => {
// console.log(props)
//     let state = props.store.getState().profilePage

//     let AddPost = () => {
//         props.store.dispatch(AddPostActionCreator())
//     }

//     let onPostChange = (text) => {
//         props.store.dispatch(updateNewPostTextActionCreator(text))
//     }

//     return (

//         <MyPosts updateNewPostText={onPostChange}
//             AddPost={AddPost}
//             posts={state.posts}
//             newPostText={state.newPostText}
//         />


//     )
// }


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddPost: () => { dispatch(AddPostActionCreator()) },
        updateNewPostText: (text) => { dispatch(updateNewPostTextActionCreator(text)) }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer