
import React from "react"
import { connect } from "react-redux"
import { Redirect, withRouter } from "react-router"

import { getUserProfile } from "../../Redux/profile-reducer"

import Profile from "./Profile"




class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { userId = 2 }
        this.props.getUserProfile(userId)

    }

    render() {

        if (!this.props.isAuth) {
            return <Redirect to="/login" />
        }
        return (
            <Profile profile={this.props.profile} />
        )
    }

}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithURLDataContainerComponent = withRouter(ProfileContainer)



export default connect(mapStateToProps, { getUserProfile })(WithURLDataContainerComponent)
