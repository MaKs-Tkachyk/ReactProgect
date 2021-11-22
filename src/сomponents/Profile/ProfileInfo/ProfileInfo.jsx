
import Preloader from "../../common/preloader/Preloader"
import s from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (

        <div >
            <div className={s.content__logo}>
                <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" />
            </div>
            <ProfileStatusWithHooks profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileInfo