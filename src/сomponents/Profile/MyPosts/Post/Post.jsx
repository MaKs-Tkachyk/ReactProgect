
import s from "./Post.module.css"
const Post = (props) => {
    return (

        <div className={s.content__post}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhT8NoN5uMYJDV9TI8e_b4D-aVi1Hm7ezMPQ&usqp=CAU" alt="" />
            {props.massage}
            <div >
                <span>
                    {`like ${props.likeCount}`}
                </span>
            </div>
        </div>


    )
}

export default Post