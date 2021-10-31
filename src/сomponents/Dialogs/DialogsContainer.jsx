
import React from "react";
import { AddDialogActionCreator, newDialogsTextActionCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";





const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage

    let addDialog = () => {
        //props.addDialog()
        props.store.dispatch(AddDialogActionCreator())
    }

    let onPostChange = (text) => {
        //props.updateNewDialogText(text)
        props.store.dispatch(newDialogsTextActionCreator(text))
    }

    return (
        <Dialogs addDialog={addDialog}
            updateNewDialogText={onPostChange}
            dialogsPage={state}
        />
    );
}

export default DialogsContainer;