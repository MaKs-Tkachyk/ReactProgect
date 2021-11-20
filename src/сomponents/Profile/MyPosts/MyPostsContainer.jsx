import { connect } from "react-redux"
import { AddPostActionCreator} from "../../../Redux/profile-reducer"
import MyPosts from "./MyPosts"




let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddPost: (newPost) => { dispatch(AddPostActionCreator(newPost)) },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer