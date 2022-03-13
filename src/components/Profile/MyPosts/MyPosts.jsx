import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={s.posts}>
            <Post message='Hi! How are you?' likeCount='12' />
            <Post message="I'm fine! And you?" likeCount='20' />
        </div>
    </div>
}

export default MyPosts;