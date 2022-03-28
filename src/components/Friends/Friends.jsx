import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {

    let friendsElements = props.friends.map(f => <Friend key={f.id} name={f.name} />);
    return (
        <div className={s.friendsBLock}>
            <h3 className={s.title}>Friends</h3>
            <div className={s.friends}>
                {friendsElements}
            </div>
        </div>
    )
}

export default Friends;