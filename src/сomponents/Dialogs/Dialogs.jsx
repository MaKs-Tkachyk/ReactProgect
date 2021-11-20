
import React from "react";
import { Redirect } from "react-router";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { reduxForm, Field } from 'redux-form';
import { maxLenghtCreator, requared } from "../../utils/validators/validators";
import TextArea from "../common/FormControls/FormControlsTextArea";



const Dialogs = (props) => {



    let state = props.dialogsPage



    let addNewMessage = (formData) => {
        props.addDialog(formData.newPostElement)
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

                <DialogsReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    );
}

const maxLength10 = maxLenghtCreator(10)

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.dialogs__formWritter}>
                <Field name={"newPostElement"} 
                component={TextArea} className={s.dialogs__textarea}
                 placeholder="your news..."  validate={[requared,maxLength10]}></Field>
                <button className={s.dialogs__button}  >Add Post</button>
            </div>
        </form>
    )
}


const DialogsReduxForm = reduxForm({ form: 'dialogs', })(DialogsForm)

export default Dialogs;