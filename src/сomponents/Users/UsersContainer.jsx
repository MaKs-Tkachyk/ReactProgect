import { connect } from "react-redux"
import { follow, setCurrentPage, getUsers, unfollow, toggleFollowingProgress, } from "../../Redux/users-reducer"
import React from "react"
import Users from "./Users"
import Preloader from "../common/preloader/Preloader"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { compose } from "redux"
import { getCurrentPage, getFollowingInProgress, getIsSwitching, getPageSize, getTotalUserCount, getUser } from "../../Redux/users-selectors"





class containerComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageNumber)
    }

    onchangePage = (pageNumber) => {
        this.props.getUsers(this.props.currentPage, this.props.pageNumber)
        this.props.setCurrentPage(pageNumber)
    }


    render() {
        return <>
            {this.props.isSwitching ? <Preloader /> : null}
            <Users totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                onchangePage={this.onchangePage}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }

}



// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUserCount: state.usersPage.totalUserCount,
//         currentPage: state.usersPage.currentPage,
//         isSwitching: state.usersPage.isSwitching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }
let mapStateToProps = (state) => {
    return {
        users: getUser(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isSwitching: getIsSwitching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}




export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers }),
    withAuthRedirect
)(containerComponent)


