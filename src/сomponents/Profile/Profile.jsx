
import MyPosts from "./MyPosts/MyPosts"
import s from "./Profile.module.css"
const Profile = () => {
    return (
        <div >
            <div className={s.content__logo}>
                <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" />
            </div>
            <div>
                ava+description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile