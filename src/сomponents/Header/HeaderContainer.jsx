
import React from "react"
import { connect } from "react-redux"
import { getAuthUsersData,loginOut } from "../../Redux/auth-reducer"
import Header from "./Header"


class HeaderContainer extends React.Component {



    render() {
        return (
            <Header Auth={this.props.Auth} login={this.props.login} loginOut={this.props.loginOut} />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        Auth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, { loginOut })(HeaderContainer)