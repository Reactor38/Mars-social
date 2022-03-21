import React from "react";
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src="https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png" alt="Avatar" />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;