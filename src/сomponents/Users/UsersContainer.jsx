import { connect } from "react-redux"
import { follow, setCurrentPage, setTotalCount, setUsers, toggleSwitching, unFollow } from "../../Redux/users-reducer"
import axios from "axios"
import React from "react"
import Users from "./Users"
import Preloader from "../common/preloader/Preloader"




class containerComponent extends React.Component {

    componentDidMount() {
        this.props.toggleSwitching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
     
            this.props.toggleSwitching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }

    onchangePage = (pageNumber) => {
        this.props.toggleSwitching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleSwitching(false)
            this.props.setUsers(response.data.items)
        })
    }





    render() {
        return <>
            {this.props.isSwitching ? <Preloader /> : null}
            <Users totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                onchangePage={this.onchangePage}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unFollow}
                follow={this.props.follow}
            />
        </>
    }

}








let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isSwitching: state.usersPage.isSwitching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (numberPage) => {
//             dispatch(setCurrentPageAC(numberPage))
//         },
//         setTotalCount: (countPage) => {
//             dispatch(setTotalCountAC(countPage))
//         },
//         toggleSwitching: (isSwitching) => {
//             dispatch(toggleSwitchingAC(isSwitching))
//         }
//     }
// }


export default connect(mapStateToProps, { follow, unFollow, setUsers, setCurrentPage, setTotalCount, toggleSwitching })(containerComponent)