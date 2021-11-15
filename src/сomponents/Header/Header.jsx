import { NavLink } from "react-router-dom"
import s from "./Header.module.css"

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://i.pinimg.com/originals/e7/eb/b9/e7ebb9c19633adddc0f06a7869f9c35b.png" />
            <div className={s.blockRegistration}>
                {props.Auth
                    ? <div className={s.loginBlock}>
                        {props.login}
                    </div>
                    : <div className={s.loginBlock}>
                        <NavLink to={`/login`}>Login</NavLink>
                    </div>
                }


            </div>
        </header>
    )
}

export default Header