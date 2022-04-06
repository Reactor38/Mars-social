const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hi! How are you?', likesCount: 12 },
        { id: 2, message: 'I\'m fine! And you?', likesCount: 20 },
        { id: 3, message: 'Ok,thanks', likesCount: 4 },
        { id: 4, message: 'Nice to meet you', likesCount: 15 }
    ],
    newPostText: "",
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, { id: 5, message: state.newPostText, likesCount: 0 }]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer;