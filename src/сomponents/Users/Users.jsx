import s from "./users.module.css"

let Users = (props) => {

    if (props.users.length === 0) {

        props.setUsers([
            {
                id: "1", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhT8NoN5uMYJDV9TI8e_b4D-aVi1Hm7ezMPQ&usqp=CAU",
                followed: true, fullName: "Dmitry", status: "Higher", location: { city: "Vinnytca", country: "Ukraine" }
            },
            {
                id: "2", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhT8NoN5uMYJDV9TI8e_b4D-aVi1Hm7ezMPQ&usqp=CAU",
                followed: true, fullName: "Sasha", status: "Hi", location: { city: "Minsk", country: "Bejlarus" }
            },
            {
                id: "3", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhT8NoN5uMYJDV9TI8e_b4D-aVi1Hm7ezMPQ&usqp=CAU",
                followed: false, fullName: "Olga", status: "Happy", location: { city: "Moskov", country: "Russia" }
            }

        ]
        )
    }




    return <div>
        {
            props.users.map(u => {
                return (
                    <div key={u.id} >
                        <span>
                            <div>
                                <img src={u.photoUrl} className={s.photo} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { props.unfollow(u.id) }}> UnFollow</button>
                                    : <button onClick={() => { props.follow(u.id) }} > Follow</button>}

                            </div>
                        </span>

                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>)
            })
        }
    </div >


}


export default Users