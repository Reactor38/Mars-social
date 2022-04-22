import React from 'react';
import profileReducer, { addPostActionCreator, deletePost } from './profileReducer';


let state = {
    posts: [
        { id: 1, message: 'Hi! How are you?', likesCount: 12 },
        { id: 2, message: 'I\'m fine! And you?', likesCount: 20 },
        { id: 3, message: 'Ok,thanks', likesCount: 4 },
        { id: 4, message: 'Nice to meet you', likesCount: 15 }
    ]
};

it('length of post should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("social-mars.com");

    //2. action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
    //1. test data
    let action = addPostActionCreator("social-mars.com");

    //2. action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts[4].message).toBe("social-mars.com");
});

it('after deleting length of messages should be decremented', () => {
    //1. test data
    let action = deletePost(1);

    //2. action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    //1. test data
    let action = deletePost(1000);

    //2. action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(4);
});