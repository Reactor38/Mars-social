
let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi! How are you?', likesCount: 12 },
            { id: 2, message: 'I\'m fine! And you?', likesCount: 20 },
            { id: 3, message: 'Ok,thanks', likesCount: 4 },
            { id: 4, message: 'Nice to meet you', likesCount: 15 }
        ]
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
        ]
    }
}

export default state;