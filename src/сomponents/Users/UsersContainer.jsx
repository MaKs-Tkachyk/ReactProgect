import { connect } from "react-redux"
import { followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unFollowAC } from "../../Redux/users-reducer"
import axios from "axios"
import React from "react"
import Users from "./Users"



class containerComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }

    onchangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }





    render() {

        return <Users   totalUserCount={this.props.totalUserCount} 
        pageSize={this.props.pageSize} 
        onchangePage = {this.onchangePage}
        currentPage = {this.props.currentPage}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        />
    

    }
}








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


export default connect(mapStateToProps, mapDispatchToProps)(containerComponent)