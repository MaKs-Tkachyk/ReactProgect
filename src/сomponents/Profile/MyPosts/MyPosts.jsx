
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
const MyPosts = (props) => {
  debugger


    let postsElements = props.posts.map((post) => <Post message={post.message} likeCount={post.likeCount} />)



    return (

        <div className={s.MyPost}>
            myPost
            <div className={s.MyPost__formWritter}>
                <textarea name="textarea" className={s.MyPost__textarea} placeholder="your news..."></textarea>
                <button className={s.MyPost__button}  >Add Post</button>
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