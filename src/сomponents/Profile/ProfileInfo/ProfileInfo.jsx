
import Preloader from "../../common/preloader/Preloader"
import s from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (

        <div >
            <div className={s.content__logo}>
                <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" />
            </div>
            <ProfileStatus profile={props.profile} />
        </div>
    )
}

export default ProfileInfo