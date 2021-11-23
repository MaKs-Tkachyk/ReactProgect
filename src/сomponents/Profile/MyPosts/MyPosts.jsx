import s from "./MyPosts.module.css"
import React from "react"
import Post from "./Post/Post"
import { reduxForm, Field } from 'redux-form';
import { maxLenghtCreator, requared } from "../../../utils/validators/validators";
import TextArea from "../../common/FormControls/FormControlsTextArea";





const maxLength10 = maxLenghtCreator(10)

const MYPostForm = (props) => {



    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.MyPost__formWritter}>
                <Field name="newPost" component={TextArea}
                    className={s.MyPost__textarea} placeholder="your news..."
                    value={props.newPostText} validate={[requared, maxLength10]} />
                <button className={s.MyPost__button}  >Add Post</button>
            </div>
        </form>)
}


const MyPostsReduxForm = reduxForm({ form: 'myPostsForm', })(MYPostForm)



const MyPosts =React.memo((props) => {

     console.log("1")

    let postsElements = props.posts.map((post) => <Post message={post.message} likeCount={post.likeCount} />)



    let onAddPost = (newPost) => {
        props.AddPost(newPost.newPost)
    }




    return (

        <div className={s.MyPost}>
            myPost
            <MyPostsReduxForm onSubmit={onAddPost} />
            <div>
                newPost
            </div>
            <div className={s.content__post} >
                {postsElements}
            </div>
        </div>

    )
})



export default MyPosts