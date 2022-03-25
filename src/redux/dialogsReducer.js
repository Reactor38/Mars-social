const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { id: 1, name: 'Pavel' },
        { id: 2, name: 'Julia' },
        { id: 3, name: 'Dmitry' },
        { id: 4, name: 'Maksim' },
        { id: 5, name: 'Kostya' },
        { id: 6, name: 'Ilya' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Hello!' },
        { id: 4, message: 'Thanks' }
    ],
    newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let message = state.newMessageText;
            state.messages.push({ id: 5, message: message });
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReducer;