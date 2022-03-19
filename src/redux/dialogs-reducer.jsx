export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessage;
            return state;
        case SEND_MESSAGE:
            let message = {id: 4, message: state.newMessageBody};
            state.newMessageBody = '';
            state.messages.push(message);
            return state;
        default: return state;
    }
}

export const updateMessageBodyAC = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newMessage: text})
export const sendMessageAC = () => ({type: SEND_MESSAGE});