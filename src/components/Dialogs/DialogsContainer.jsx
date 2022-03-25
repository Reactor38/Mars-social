import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<Dialogs sendMessage={sendMessage}
        updateNewMessageText={onMessageChange}
        dialogsPage={state} />)
}

export default DialogsContainer;