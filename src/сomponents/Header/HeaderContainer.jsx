
import React from "react"
import { connect } from "react-redux"
import { getAuthUsersData } from "../../Redux/auth-refucer"
import Header from "./Header"


class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.getAuthUsersData()
       console.log(this.props.getAuthUsersData())
    }

    render() {
        return (
            <Header Auth={this.props.Auth} login={this.props.login} />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        Auth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, { getAuthUsersData })(HeaderContainer)