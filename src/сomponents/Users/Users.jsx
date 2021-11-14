import { NavLink } from "react-router-dom"
import userPhoto from "../../assets/images/user.jfif"
import s from "./users.module.css"

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={s.pageNumber}>
                {pages.map(p => {
                    return <span onClick={() => { props.onchangePage(p) }} className={props.currentPage === p && s.selectedPage}>{p}</span>
                })}
            </div>

            {
                props.users.map(u => {
                    return (
                        <div key={u.id} >
                            <span>
                                <div>
                                   <NavLink to={`/profile/` + u.id}><img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo} /></NavLink> 
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => { props.unfollow(u.id) }}> UnFollow</button>
                                        : <button onClick={() => { props.follow(u.id) }} > Follow</button>}
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
    )
}

export default Users