import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Pavel</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Julia</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Dmitry</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Maksim</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Kostya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Ilya</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Hello!</div>
                <div className={s.message}>Thanks</div>
            </div>
        </div>
    );
}

export default Dialogs;