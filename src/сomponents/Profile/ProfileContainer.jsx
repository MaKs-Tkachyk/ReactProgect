
import React from "react"
import { connect } from "react-redux"
import { Redirect, withRouter } from "react-router"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"

import { getUserProfile } from "../../Redux/profile-reducer"

import Profile from "./Profile"




class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { userId = 2 }
        this.props.getUserProfile(userId)

    }

    render() {


        return (
            <Profile profile={this.props.profile} />
        )
    }

}




let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,

    }
}


export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


