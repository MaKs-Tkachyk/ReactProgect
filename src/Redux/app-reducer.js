import { getAuthUsersData } from "./auth-reducer";

const SET_INITILISED_SUCCESS = "SET-INITILISED-SUCCESS"



let initialState = {
    initilized: false,
}
const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITILISED_SUCCESS: {

            return {
                ...state,
                initilized: true,
            }
        }
        default:
            return state;
    }
}


export const setInitializedSuccess = () => ({ type: SET_INITILISED_SUCCESS})


export const initializeApp = () => async (dispatch) => {
    await dispatch(getAuthUsersData());
    dispatch(setInitializedSuccess());
  };



export default appReducer
