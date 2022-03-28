import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);

    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} />);

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea
                        placeholder='Enter your message'
                        onChange={onMessageChange}
                        value={state.newMessageText} />
                </div>
                <div>
                    <button onClick={onSendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;