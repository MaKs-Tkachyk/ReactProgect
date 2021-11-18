
import Preloader from "../../common/preloader/Preloader"
import s from "./ProfileInfo.module.css"
import veka from '../../../social_groups/veka.png'
import facebook from '../../../social_groups/facebook.png'
import instagram from '../../../social_groups/instagram.png'
import twitter from '../../../social_groups/twitter.png'
import youtube from '../../../social_groups/youtube.png'
import React from "react"



class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode () {
       this.setState({
        editMode : true
       })
    }
    deActivateEditMode () {
        this.setState({
         editMode : false
        })
    }
       
  
    


    render() {
        return (
            <div className={s.user_acaunt}>
                <div className={s.userImg}>
                    <img src={this.props.profile.photos.small} />
                </div>
                <div className={s.user_Information}>
                    <h1>{this.props.profile.fullName}</h1>
                    <div className={s.status}>
                        {!this.state.editMode &&
                            <div onDoubleClick={this.activateEditMode.bind(this)} >{`Status: ${this.props.profile.lookingForAJobDescription}`}</div>
                        }
                        {this.state.editMode &&
                            <div><input autoFocus={true}  onBlur={this.deActivateEditMode.bind(this)} type="text" placeholder={this.props.profile.lookingForAJobDescription} /></div>
                        }

                    </div>
                    <div className={s.aboutUser}>{`About user: ${this.props.profile.aboutMe}`}</div>
                    <div className={s.social_groups}>
                        <a href={this.props.profile.contacts.vk}><img src={veka} alt="" /></a>
                        <a href={this.props.profile.contacts.facebook}><img src={facebook} alt="" /></a>
                        <a href={this.props.profile.contacts.instagram}><img src={instagram} alt="" /></a>
                        <a href={this.props.profile.contacts.twitter}><img src={twitter} alt="" /></a>
                        <a href={this.props.profile.contacts.youtube}> <img src={youtube} alt="" /></a>
                    </div>
                    <div>

                    </div>

                </div>

            </div>
        )
    }

}

export default ProfileStatus