
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";




const Dialogs = (props) => {

    let newPostElement = React.createRef()


    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }


    let dialogsElements = props.state.dialogs.map((users) => <DialogItem name={users.name} id={users.id} />)
    let messagesElements = props.state.messages.map((messages) => <Message message={messages.message} id={messages.id} />)


    return (
        <div className={s.dialogs} >
            <div className={s.dialogs__dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.dialogs__messages}>
                <div className={s.dialogs__formWritter}>
                    <textarea ref={newPostElement} name="textarea" className={s.dialogs__textarea} placeholder="your news..."></textarea>
                    <button className={s.dialogs__button} onClick={addPost}  >Add Post</button>
                </div>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;