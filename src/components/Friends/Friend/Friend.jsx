import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={s.itemName}>
            <img src="https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png" alt="Avatar" />
            {props.name}
        </div>
    );
}


export default Friend;