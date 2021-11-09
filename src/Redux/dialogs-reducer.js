const ADD_DIALOG = "ADD-DIALOG"
const UPDATE_NEW_DIALOG_TEXT = "UPDATE-NEW-DIALOG-TEXT"


let initialState = {
    messages: [
        { message: "Hi ", id: "1" },
        { message: "How are you ", id: "2" },
        { message: "I`m fine ", id: "3" },
        { message: "And you ", id: "4" },
    ],
    dialogs: [
        { name: "Andrey ", id: "1" },
        { name: "Max ", id: "2" },
        { name: "Sergiy ", id: "3" },
        { name: "Bogdan ", id: "4" },
    ],
    newDialogsText: "",
}




const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_DIALOG: {
            let newDialog = {
                id: 5,
                message: state.newDialogsText,
            }
            return {
                ...state,
                messages: [...state.messages, newDialog],
                newDialogsText: ""

            }
  
        }
        case UPDATE_NEW_DIALOG_TEXT: {
            return {
                ...state,
                newDialogsText: action.newText
            }

        }

        default:
            return state
    }
}


export const AddDialogActionCreator = () => ({ type: ADD_DIALOG })
export const newDialogsTextActionCreator = (text) => ({ type: UPDATE_NEW_DIALOG_TEXT, newText: text })

export default dialogsReducer