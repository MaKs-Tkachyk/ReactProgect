import axios from "axios"
import s from "./users.module.css"
import userPhoto from "../../assets/images/user.jfif"

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })

        }
    }

    // props.setUsers([
    //     {
    //       id: "1", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhT8NoN5uMYJDV9TI8e_b4D-aVi1Hm7ezMPQ&usqp=CAU",
    //       followed: true,
    //       fullName: "Dmitry", 
    //       status: "Higher", 
    //       location: { city: "Vinnytca", country: "Ukraine" }
    // //     },])





    return <div>
          <button onClick={getUsers}>getUsers</button>
        {
            props.users.map(u => {
                return (
        <div key={u.id} >
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo} />
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


}


export default Users