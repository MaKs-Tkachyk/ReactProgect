
import React from "react";
import { AddDialogActionCreator, newDialogsTextActionCreator } from "../../Redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";




const Dialogs = (props) => {

    let newPostElement = React.createRef()




    let addDialog = () => {
        //props.addDialog()
        props.dispatch(AddDialogActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        //props.updateNewDialogText(text)
        props.dispatch(newDialogsTextActionCreator(text))

    }

    let dialogsElements = props.state.dialogs.map((users) => <DialogItem name={users.name} id={users.id} />)
    let messagesElements = props.state.messages.map((messages) => <Message message={messages.message} id={messages.id} />)


    return (
        <div className={s.dialogs} >
            <div className={s.dialogs__dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.dialogs__messages}>
                {messagesElements}
                <div className={s.dialogs__formWritter}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.state.newDialogsText} className={s.dialogs__textarea} placeholder="your news..."></textarea>
                    <button className={s.dialogs__button} onClick={addDialog}  >Add Post</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;