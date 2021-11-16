
import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import { getUser } from "../../Redux/profile-reducer"

import Profile from "./Profile"




class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { userId = 2 }
        this.props.getUser(userId)
    }

    render() {
        return (

            <Profile profile={this.props.profile} />
        )
    }

}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithURLDataContainerComponent = withRouter(ProfileContainer)



export default connect(mapStateToProps, { getUser })(WithURLDataContainerComponent)
