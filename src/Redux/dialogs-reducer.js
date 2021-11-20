const ADD_DIALOG = "ADD-DIALOG"



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

}




const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_DIALOG: {
            let newDialog = {
                id: 5,
                message: action.newMessage,
            }
            return {
                ...state,
                messages: [...state.messages, newDialog],
 

            }
  
        }

        default:
            return state
    }
}


export const AddDialogActionCreator = (newMessage) => ({ type: ADD_DIALOG , newMessage})


export default dialogsReducer