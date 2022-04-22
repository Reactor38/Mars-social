const SEND_MESSAGE = 'dialogs/SEND_MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let message = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: message }]
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;