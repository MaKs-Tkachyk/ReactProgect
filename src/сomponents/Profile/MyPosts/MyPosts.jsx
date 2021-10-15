
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
const MyPosts = () => {

    let postsData = [
        { message: "Hi, how are you? ", likeCount :"15",id: "1" },
        { message: "It`s my first post", likeCount :"25",id: "2" },
    ]







    return (

        <div className={s.MyPost}>
            myPost
            <div className={s.MyPost__formWritter}>
                <textarea name="textarea" className={s.MyPost__textarea}  placeholder="your news..."></textarea>
                <button className={s.MyPost__button}  >Add Post</button>
            </div>
            <div>
                newPost
            </div>
            <div className={s.content__post} >
                <Post massage = "Hi, how are you?" likeCount = "15" />
                <Post massage = "It`s my first post"  likeCount = "25"/>
            </div>
        </div>

    )
}

export default MyPosts