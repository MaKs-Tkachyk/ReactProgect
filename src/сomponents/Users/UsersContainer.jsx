import { connect } from "react-redux"
import { followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unFollowAC } from "../../Redux/users-reducer"
import Users from "./Users"

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (numberPage) => {
            dispatch(setCurrentPageAC(numberPage))
        },
        setTotalCount: (countPage) => {
            dispatch(setTotalCountAC(countPage))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)