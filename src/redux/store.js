import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi! How are you?', likesCount: 12 },
                { id: 2, message: 'I\'m fine! And you?', likesCount: 20 },
                { id: 3, message: 'Ok,thanks', likesCount: 4 },
                { id: 4, message: 'Nice to meet you', likesCount: 15 }
            ],
            newPostText: ""
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Dmitry' },
                { id: 2, name: 'Kostya' },
                { id: 3, name: 'Julia' },
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;
