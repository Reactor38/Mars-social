import React from 'react';
import s from './Post.module.css';
import avatar from '../../../../assets/images/Avatar.png'


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={avatar} alt="Avatar" />
            {props.message}
            <div>
                <img src="https://ps.w.org/like-dislike-plus-counter/assets/icon-256x256.png?rev=1896852" alt="Like" />
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;