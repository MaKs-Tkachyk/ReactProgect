
import { connect } from "react-redux";
import { AddDialogActionCreator, newDialogsTextActionCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


// const DialogsContainer = (props) => {
//     let state = props.store.getState().dialogsPage

//     let addDialog = () => {
//         //props.addDialog()
//         props.store.dispatch(AddDialogActionCreator())
//     }

//     let onPostChange = (text) => {
//         //props.updateNewDialogText(text)
//         props.store.dispatch(newDialogsTextActionCreator(text))

//     }

//     return (
//         <Dialogs addDialog={addDialog}
//             updateNewDialogText={onPostChange}
//             dialogsPage={state}
//         />
//     );
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewDialogText: (text) => { dispatch(newDialogsTextActionCreator(text)) },
        addDialog: () => { dispatch(AddDialogActionCreator()) }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;