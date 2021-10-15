
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";


const DialogItem = (props) => {
    return (
        <div className={s.dialog__item}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {
    return (
        <div className={s.dialogs__message}>{props.message}</div>
    )
}




const Dialogs = () => {

    let dialogs = [
        { name: "Andrey ", id: "1" },
        { name: "Max ", id: "2" },
        { name: "Sergiy ", id: "3" },
        { name: "Bogdan ", id: "4" },
    ]
    let messages = [
        { message: "Hi ", id: "1" },
        { message: "How are you ", id: "2" },
        { message: "I`m fine ", id: "3" },
        { message: "And you ", id: "4" },
    ]


    let dialogsElements = dialogs.map((users) => <DialogItem name={users.name} id={users.id} />)
    let messagesElements = messages.map((messages) => <Message message={messages.message} id={messages.id} />)


    return (
        <div className={s.dialogs} >
            <div className={s.dialogs__dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.dialogs__messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;