import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png" alt="Avatar" />
            {props.message}
            <div>
                <img src="https://ps.w.org/like-dislike-plus-counter/assets/icon-256x256.png?rev=1896852" alt="Like" />
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;