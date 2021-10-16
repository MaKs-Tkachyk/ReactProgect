
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";




const Dialogs = (props) => {




    let dialogsElements = props.state.dialogs.map((users) =><DialogItem name={users.name} id={users.id} />)
    let messagesElements = props.state.messages.map((messages) =><Message message={messages.message} id={messages.id} />)


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