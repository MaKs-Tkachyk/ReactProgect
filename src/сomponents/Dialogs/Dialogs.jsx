
import React from "react";
import { Redirect } from "react-router";
import { AddDialogActionCreator, newDialogsTextActionCreator } from "../../Redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";




const Dialogs = (props) => {

    let newPostElement = React.createRef()

    let state = props.dialogsPage



    let addDialog = () => {
        props.addDialog()

    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewDialogText(text)

    }

    let dialogsElements = state.dialogs.map((users) => <DialogItem name={users.name} key={users.id} id={users.id} />)
    let messagesElements = state.messages.map((messages) => <Message message={messages.message} key={messages.id} id={messages.id} />)

    if (!props.isAuth) {
        return <Redirect to="/login" />
    }

    return (
        <div className={s.dialogs} >
            <div className={s.dialogs__dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.dialogs__messages}>
                {messagesElements}
                <div className={s.dialogs__formWritter}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={state.newDialogsText} className={s.dialogs__textarea} placeholder="your news..."></textarea>
                    <button className={s.dialogs__button} onClick={addDialog}  >Add Post</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;