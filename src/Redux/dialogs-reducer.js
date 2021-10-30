const ADD_DIALOG = "ADD-DIALOG"
const UPDATE_NEW_DIALOG_TEXT = "UPDATE-NEW-DIALOG-TEXT"

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_DIALOG:
            let newDialog = {
                id: 5,
                message: state.newDialogsText,
            }
            state.messages.push(newDialog)
            state.newDialogsText = ""
            return state
        case UPDATE_NEW_DIALOG_TEXT:
            state.newDialogsText = action.newText
            return state
        default:
            return state
    }
}


export const AddDialogActionCreator = () => ({ type: ADD_DIALOG })
export const newDialogsTextActionCreator = (text) => ({ type: UPDATE_NEW_DIALOG_TEXT, newText: text })

export default dialogsReducer