let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi! How are you?', likesCount: 12 },
            { id: 2, message: 'I\'m fine! And you?', likesCount: 20 },
            { id: 3, message: 'Ok,thanks', likesCount: 4 },
            { id: 4, message: 'Nice to meet you', likesCount: 15 }
        ],
        newPostText: "it-kamara"
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
        newMessageText: "Hello everyone"
    },
    sidebar: {
        friends: [
            { id: 1, name: 'Dmitry' },
            { id: 2, name: 'Kostya' },
            { id: 3, name: 'Julia' },
        ]
    }
}
window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;