
import Preloader from "../../common/preloader/Preloader"
import s from "./ProfileInfo.module.css"
import veka from '../../../social_groups/veka.png'
import facebook from '../../../social_groups/facebook.png'
import instagram from '../../../social_groups/instagram.png'
import twitter from '../../../social_groups/twitter.png'
import youtube from '../../../social_groups/youtube.png'
const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (

        <div >
            <div className={s.content__logo}>
                <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" />
            </div>
            <div className={s.user_acaunt}>
                <div className={s.userImg}>
                    <img src={props.profile.photos.small} />
                </div>
                <div className={s.user_Information}>
                    <h1>{props.profile.fullName}</h1>
                    <div className={s.status}>{`Status: ${props.profile.lookingForAJobDescription}`}</div>
                    <div className={s.aboutUser}>{`About user: ${props.profile.aboutMe}`}</div>
                    <div className={s.social_groups}>
                        <a href={props.profile.contacts.vk}><img src={veka} alt="" /></a>
                        <a href={props.profile.contacts.facebook}><img src={facebook} alt="" /></a>
                        <a href={props.profile.contacts.instagram}><img src={instagram} alt="" /></a>
                        <a href={props.profile.contacts.twitter}><img src={twitter} alt="" /></a>
                        <a href={props.profile.contacts.youtube}> <img src={youtube} alt="" /></a>
                    </div>
                    <div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProfileInfo