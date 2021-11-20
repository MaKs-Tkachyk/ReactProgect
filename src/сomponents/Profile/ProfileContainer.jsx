
import React from "react"
import { connect } from "react-redux"
import {  withRouter } from "react-router"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"

import { getUserProfile,getStatus,updateStatus } from "../../Redux/profile-reducer"

import Profile from "./Profile"




class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { userId = this.props.userId }
        
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

    }

    render() {


        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }

}




let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId

    }
}


export default compose(
    connect(mapStateToProps, { getUserProfile,getStatus,updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


