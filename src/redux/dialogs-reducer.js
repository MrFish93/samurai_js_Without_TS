export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
        dialogs: [
            {id: 1, name: 'Vova'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Dima'},
            {id: 4, name: 'Vlad'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
        ],
        newMessageBody: '',
    }

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.newMessage}
        case SEND_MESSAGE: {
            return {...state, messages: [...state.messages, {id: 4, message: state.newMessageBody}], newMessageBody: ''}
        }
        default: return state;
    }
}

export const updateMessageBodyAC = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newMessage: text})
export const sendMessageAC = () => ({type: SEND_MESSAGE});