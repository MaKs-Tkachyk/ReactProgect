import axios from "axios"
import s from "./users.module.css"
import userPhoto from "../../assets/images/user.jfif"
import React from "react"


class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }







    render() {
        return <div>
            <button onClick={this.componentDidMount}>getUsers</button>
            {
                this.props.users.map(u => {
                    return (
                        <div key={u.id} >
                            <span>
                                <div>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo} />
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => { this.props.unfollow(u.id) }}> UnFollow</button>
                                        : <button onClick={() => { this.props.follow(u.id) }} > Follow</button>}
                                </div>
                            </span>

                            <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    {/* <div>{u.location.country}</div>
                              <div>{u.location.city}</div> */}
                                </span>
                            </span>
                        </div>)
                })
            }
        </div >

    }
}


export default Users