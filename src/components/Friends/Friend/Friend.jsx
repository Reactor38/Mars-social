import React from 'react';
import s from './Friend.module.css';
import avatar from '../../../assets/images/Avatar.png'

const Friend = (props) => {
    return (
        <div className={s.itemName}>
            <img src={avatar} alt="Avatar" />
            {props.name}
        </div>
    );
}


export default Friend;