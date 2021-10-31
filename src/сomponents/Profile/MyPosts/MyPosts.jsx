import s from "./MyPosts.module.css"
import React from "react"
import Post from "./Post/Post"

const MyPosts = (props) => {



    let postsElements = props.posts.map((post) => <Post message={post.message} likeCount={post.likeCount} />)
    let newPostElement = React.createRef()


    let onAddPost = () => {
        props.AddPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }


    return (

        <div className={s.MyPost}>
            myPost
            <div className={s.MyPost__formWritter}>
                <textarea onChange={onPostChange} ref={newPostElement}  value={props.newPostText} className={s.MyPost__textarea} placeholder="your news..."
                    value={props.newPostText} />
                <button className={s.MyPost__button} onClick={onAddPost}  >Add Post</button>
            </div>
            <div>
                newPost
            </div>
            <div className={s.content__post} >
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts