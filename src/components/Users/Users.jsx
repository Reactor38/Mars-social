import React from "react";
import styles from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoURL: 'https://icdn.lenta.ru/images/2021/07/21/20/20210721200926212/square_320_3b7d8e82f70387b4bc934cb3da865b8f.jpg',
                followed: true, fullName: 'Alex', status: 'I am here now', location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 2, photoURL: 'https://icdn.lenta.ru/images/2021/07/21/20/20210721200926212/square_320_3b7d8e82f70387b4bc934cb3da865b8f.jpg',
                followed: false, fullName: 'John', status: 'I am a boss', location: { city: 'Michigan', country: 'USA' }
            },
            {
                id: 3, photoURL: 'https://icdn.lenta.ru/images/2021/07/21/20/20210721200926212/square_320_3b7d8e82f70387b4bc934cb3da865b8f.jpg',
                followed: false, fullName: 'Drew', status: 'I like tennis!', location: { city: 'Minsk', country: 'Belarus' }
            },
            {
                id: 4, photoURL: 'https://icdn.lenta.ru/images/2021/07/21/20/20210721200926212/square_320_3b7d8e82f70387b4bc934cb3da865b8f.jpg',
                followed: true, fullName: 'Pike', status: 'I love swim', location: { city: 'Kiev', country: 'Ukraine' }
            }
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoURL} alt="Avatar" className={styles.userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div >)
            }
        </div >
    );
}

export default Users;