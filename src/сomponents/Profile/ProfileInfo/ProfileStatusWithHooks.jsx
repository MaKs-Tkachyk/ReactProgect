
import s from "./ProfileInfo.module.css"
import veka from '../../../social_groups/veka.png'
import facebook from '../../../social_groups/facebook.png'
import instagram from '../../../social_groups/instagram.png'
import twitter from '../../../social_groups/twitter.png'
import youtube from '../../../social_groups/youtube.png'
import React, { useEffect, useState } from "react"
import user from '../../../assets/images/user.jfif'



const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)


      useEffect(()=>{
        setStatus(props.status)
      }, [props.status])


    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)

    }

    const onStatusChange = (e) => {

        setStatus(e.currentTarget.value)

    }



    return (
        <div className={s.user_acaunt}>
            <div className={s.userImg}>
                <img src={!props.profile.photos.small ? user : props.profile.photos.small} />
            </div>
            <div className={s.user_Information}>
                <h1>{props.profile.fullName}</h1>
                <div className={s.status}>
                    {!editMode &&
                        <div onDoubleClick={activateEditMode}  >{`Status: ${!props.status ? "hi" : props.status}`}</div>
                    }
                    {editMode &&
                        <div><input onChange={onStatusChange} value={status} autoFocus={true} type="text" onBlur={deActivateEditMode} /></div>
                    }

                </div>
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
    )


}

export default ProfileStatusWithHooks